import * as fg from 'fast-glob'

export default function listFiles(patterns: string[]): string[] {
  const entries = fg.sync(patterns, { absolute: false })

  return entries
}
