export interface ClassesDiff {
  classesToAdd: string[]
  classesToDelete: string[]
}

export interface DiffTracker {
  add: (id: string, classes: Set<string>) => ClassesDiff
  delete: (id: string) => ClassesDiff
}

export function createDiffTracker(): DiffTracker {
  let classes = new Map<string, Set<string>>()

  function add(id: string, newClasses: Set<string>): ClassesDiff {
    let classesToAdd = []
    let classesToDelete = []
    if (classes.has(id)) {
      let oldClasses = classes.get(id) as Set<string>
      for (let newClass of newClasses) {
        if (!oldClasses.has(newClass)) classesToAdd.push(newClass)
      }

      for (let oldClass of oldClasses) {
        if (!newClasses.has(oldClass)) classesToDelete.push(oldClass)
      }
    } else {
      newClasses.forEach((c) => classesToAdd.push(c))
    }

    classes.set(id, newClasses)

    return {
      classesToAdd,
      classesToDelete,
    }
  }

  function remove(id: string): ClassesDiff {
    let classesToAdd: string[] = []
    let classesToDelete: string[] = []
    if (classes.has(id)) {
      classesToDelete = Array.from(classes.get(id) as Set<string>)
      classes.delete(id)
    }
    return {
      classesToAdd,
      classesToDelete,
    }
  }

  return {
    add,
    delete: remove,
  }
}
