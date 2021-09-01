export const textOverflow = {
  truncate(value: string) {
    if (value) return
    return {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    }
  },
  'overflow-ellipsis'(value: string) {
    if (value) return
    return {
      'text-overflow': 'ellipsis',
    }
  },
  'overflow-clip'(value: string) {
    if (value) return
    return {
      'text-overflow': 'clip',
    }
  },
}
