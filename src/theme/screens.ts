export interface ThemeScreen {
  name: string
  minWidth: number
}

export type ThemeScreens = ThemeScreen[]

export const screens: ThemeScreen[] = [
  { name: 'xs', minWidth: 480 },
  { name: 'sm', minWidth: 640 },
  { name: 'md', minWidth: 768 },
  { name: 'lg', minWidth: 1024 },
  { name: 'xl', minWidth: 1280 },
  { name: '2xl', minWidth: 1536 },
]
