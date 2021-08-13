export const gridAutoFlow = {
  'grid-flow-row'(value: string) {
    if (value) return
    return {
      'grid-auto-flow': 'row',
    }
  },
  'grid-flow-col'(value: string) {
    if (value) return
    return {
      'grid-auto-flow': 'column',
    }
  },
  'grid-flow-row-dense'(value: string) {
    if (value) return
    return {
      'grid-auto-flow': 'row dense',
    }
  },
  'grid-flow-col-dense'(value: string) {
    if (value) return
    return {
      'grid-auto-flow': 'col dense',
    }
  },
}
