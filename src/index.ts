import { Theme } from './theme'

export interface DogtailCss {
  addClass(className: string)
  removeClass(className: string)
  render(): string
}

export interface DogtailCssOptions {
  plugins?: any[]
  theme?: Theme
}

export function dogtailcss(config: DogtailCssOptions): DogtailCss {
  return {
    addClass(className: string) {},
    removeClass(className: string) {},
    render() {
      return ''
    },
  }
}
