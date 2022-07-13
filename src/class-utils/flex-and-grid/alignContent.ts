export const alignContent = {
  'content-start'(value: string) {
    if (value) return
    return {
      'align-content': 'flex-start',
    }
  },
  'content-end'(value: string) {
    if (value) return
    return {
      'align-content': 'flex-end',
    }
  },
  'content-center'(value: string) {
    if (value) return
    return {
      'align-content': 'center',
    }
  },
  'content-between'(value: string) {
    if (value) return
    return {
      'align-content': 'space-between',
    }
  },
  'content-around'(value: string) {
    if (value) return
    return {
      'align-content': 'space-around',
    }
  },
  'content-evenly'(value: string) {
    if (value) return
    return {
      'align-content': 'space-evenly',
    }
  },
}
