import colors from './colors'
import cssColors from './cssColors'
import mediaScreens from './mediaScreens'

export interface Theme {
  colors: any
  cssColors: any
  mediaScreens: any
}

export let theme: Theme = {
  colors,
  cssColors,
  mediaScreens,
}
