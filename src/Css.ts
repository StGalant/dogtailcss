export interface Css {
  addClasses(classes: string[] | Set<string>)
  updateClassess(
    addClasses: string[] | Set<string>,
    removeClasses?: string[] | Set<string>
  )
  applyClasses()
  [key: string]: any
}
