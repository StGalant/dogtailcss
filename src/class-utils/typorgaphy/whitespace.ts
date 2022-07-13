export const whitespace = {
  whitespace(value: string) {
    if (!value) return

    if (/^normal|nowrap|pre|pre-line|pre-wrap$/.test(value)) {
      return {
        'white-space': value,
      }
    }
  },
}
