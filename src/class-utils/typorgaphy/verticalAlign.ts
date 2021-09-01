export const verticalAlign = {
  align(value: string) {
    if (/^baseline|top|middle|bottom|text-top|text-bottom$/.test(value)) {
      return {
        'vertical-align': value,
      }
    }
  },
}
