import * as fg from 'fast-glob'
import * as fs from 'fs'
import { Css } from '../Css'
import { parseHtml } from './extractHtmlClasses'

export function listFiles(patterns: string[]): string[] {
  const entries = fg.sync(patterns, { absolute: true })

  return entries
}

export function extractClasses(fileContent: string): Set<string> {
  //TODO filter fileContent
  return parseHtml(fileContent)
}

type TrackedFiles = Map<string, Set<string>>

export function extractAllClasses(patterns: string[]): TrackedFiles {
  let files = listFiles(patterns)
  console.log(JSON.stringify(patterns))
  console.log(JSON.stringify(files))

  let trackedFiles = new Map<string, Set<string>>()
  files.forEach((file) => {
    let fileContent = fs.readFileSync(file, { encoding: 'utf-8' })
    console.log(fileContent)

    let classes = extractClasses(fileContent)
    console.log(JSON.stringify(Array.from(classes)))

    trackedFiles.set(file, classes)
  })

  return trackedFiles
}

interface ClassesDiff {
  classesToAdd: string[]
  classesToDelete: string[]
}

export function patchFileClasses(
  file: string,
  trackedFiles: TrackedFiles
): ClassesDiff {
  let classesToAdd: string[] = []
  let classesToDelete: string[] = []
  let fileContent: string

  try {
    fileContent = fs.readFileSync(file, { encoding: 'utf-8' })
  } catch (err) {
    if (err.code == 'ENOENT') {
      classesToDelete = trackedFiles.has(file)
        ? Array.from(trackedFiles.get(file) as Set<string>)
        : classesToDelete
    }
    return { classesToAdd, classesToDelete }
  }
  let newClasses = extractClasses(fileContent)

  if (trackedFiles.has(file)) {
    let oldClasses = trackedFiles.get(file) as Set<string>
    for (let newClass of newClasses) {
      if (!oldClasses.has(newClass)) classesToAdd.push(newClass)
    }

    for (let oldClass of oldClasses) {
      if (!newClasses.has(oldClass)) classesToDelete.push(oldClass)
    }
  } else {
    classesToAdd = Array.from(newClasses)
  }

  trackedFiles.set(file, newClasses)
  return { classesToAdd, classesToDelete }
}

export function createFileTracker(patterns: string[], css: Css) {
  let trackedFiles = extractAllClasses(patterns)
  css.applyClasses()
  return function onFileChange(file: string) {
    let { classesToAdd, classesToDelete } = patchFileClasses(file, trackedFiles)
    css.updateClassess(classesToAdd, classesToDelete)
    css.applyClasses()
  }
}
