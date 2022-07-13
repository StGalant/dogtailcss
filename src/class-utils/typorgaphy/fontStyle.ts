export const fontStyle = {
  italic(value: string) {
    if (value) return
    return {
      'font-style': 'italic',
    }
  },
  'not-italic'(value: string) {
    if (value) return
    return {
      'font-style': 'normal',
    }
  },
}
