export const justifyContent = {
  'justify-start'(value: string) {
    if (value) return
    return {
      'justify-content': 'flex-start',
    }
  },
  'justify-end'(value: string) {
    if (value) return
    return {
      'justify-content': 'flex-end',
    }
  },
  'justify-center'(value: string) {
    if (value) return
    return {
      'justify-content': 'center',
    }
  },
  'justify-between'(value: string) {
    if (value) return
    return {
      'justify-content': 'space-between',
    }
  },
  'justify-around'(value: string) {
    if (value) return
    return {
      'justify-content': 'space-around',
    }
  },
  'justify-evenly'(value: string) {
    if (value) return
    return {
      'justify-content': 'space-evenly',
    }
  },
}
