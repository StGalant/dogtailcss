export const list = {
  list(value: string) {
    if (!value) return
    // list-- => { list-style-type: '-'}
    if (/^#.+$/.test(value)) {
      return {
        'list-style-type': `'${value.substring(1)}'`,
      }
    }
    //no filter to allow custom counter styles
    return {
      'list-style-type': value,
    }
  },
  'list-inside'(value: string) {
    if (value) return
    return {
      'list-style-position': 'inside',
    }
  },
  'list-outside'(value: string) {
    if (value) return
    return {
      'list-style-position': 'outside',
    }
  },
}
