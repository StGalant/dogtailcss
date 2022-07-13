export const bgAttachment = {
  bg(value: string) {
    if (!value) return
    if (/^fixed|local|scroll$/.test(value))
      return {
        'background-attachment': value,
      }
  },
}
