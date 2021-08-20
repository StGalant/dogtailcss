import { Theme } from '../theme/index.js'

export function getSpacing(value: string, theme: Theme): string {
  let sign = value.substring(0, 1) === '-' ? '-' : ''
  let uValue = sign ? value.substring(1) : value
  let space =
    theme.spacing[uValue] ||
    (/^\d+(\.\d+)?(px|%|em|rem|wv|wh)$/.test(uValue) ? uValue : '')
  return space ? sign + space : ''
}
