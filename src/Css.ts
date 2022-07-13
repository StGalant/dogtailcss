export interface Css {
  add(id: string, classes: Set<string>): void
  delete(id: string): void
  applySync(): void
  apply(): Promise<void>
  render(): string
  [key: string]: any
}
