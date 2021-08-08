export interface Css {
  addClasses(classes: string[] | Set<string>): void
  updateClassess(addClasses: string[], removeClasses?: string[]): void
  applyClasses(): void
  [key: string]: any
}
