export const bgClip = {
  'bg-clip'(value: string) {
    if (/^border|padding|content$/.test(value))
      return {
        'background-clip': `${value}-box`,
      }

    if (value === 'text')
      return {
        'background-clip': value,
      }
  },
}
