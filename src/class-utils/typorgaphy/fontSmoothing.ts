export const fontSmoothing = {
  antialiased(value: string) {
    if (value) return
    return {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    }
  },
  'subpixel-antialiased'(value: string) {
    if (value) return
    return {
      '-webkit-font-smoothing': 'auto',
      '-moz-osx-font-smoothing': 'auto',
    }
  },
}
