export const bgPosition = {
  bg(value: string) {
    if (!value) return
    if (
      /^bottom|top|left|center|left-bottom|left-top|right|right-bottom|right-top|top$/.test(
        value
      )
    )
      return {
        'background-position': value.replace('-', ' '),
      }
  },
}
