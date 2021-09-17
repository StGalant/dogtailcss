export const bgSize = {
  bg(value: string) {
    if (/^auto|cover|contain$/.test(value))
      return {
        'background-size': value,
      }
  },
}
