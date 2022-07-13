export const bgOrigin = {
  'bg-origin'(value: string) {
    if (/^border|padding|content$/.test(value))
      return {
        'background-origin': `${value}-box`,
      }
  },
}
