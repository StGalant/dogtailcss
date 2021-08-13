export const gridPlacing = {
  // Columns
  'col-start'(value: string) {
    if (value === 'auto') {
      return {
        'grid-column-start': 'auto',
      }
    }

    if (value.match(/^-?\d+$/)) {
      return {
        'grid-column-start': value,
      }
    }
  },
  'col-end'(value: string) {
    if (value === 'auto') {
      return {
        'grid-column-end': 'auto',
      }
    }

    if (value.match(/^-?\d+$/)) {
      return {
        'grid-column-end': value,
      }
    }
  },
  'col-span'(value: string) {
    if (value === 'full') {
      return {
        'grid-column': '1 / -1',
      }
    }

    if (value.match(/^\d+$/)) {
      return {
        'grid-column': `span ${value} / span ${value}`,
      }
    }
  },
  col(value: string) {
    if (value.match(/^-?\d+--?\d+$/)) {
      let [_, start, end] = value.matchAll(/^(-?\d+)-(-?\d+)$/g).next().value
      return {
        'grid-column': `${start} / ${end}`,
      }
    }

    if (value.match(/^-?\d+-span-\d+$/)) {
      let [_, start, span] = value
        .matchAll(/^(-?\d+)-span-(\d+)$/g)
        .next().value
      return {
        'grid-column': `${start} / span ${span}`,
      }
    }
  },

  //Rows
  'row-start'(value: string) {
    if (value === 'auto') {
      return {
        'grid-row-start': 'auto',
      }
    }

    if (value.match(/^-?\d+$/)) {
      return {
        'grid-row-start': value,
      }
    }
  },
  'row-end'(value: string) {
    if (value === 'auto') {
      return {
        'grid-row-end': 'auto',
      }
    }

    if (value.match(/^-?\d+$/)) {
      return {
        'grid-row-end': value,
      }
    }
  },
  'row-span'(value: string) {
    if (value === 'full') {
      return {
        'grid-row': '1 / -1',
      }
    }

    if (value.match(/^\d+$/)) {
      return {
        'grid-row': `span ${value} / span ${value}`,
      }
    }
  },
  row(value: string) {
    if (value.match(/^-?\d+--?\d+$/)) {
      let [_, start, end] = value.matchAll(/^(-?\d+)-(-?\d+)$/g).next().value
      return {
        'grid-row': `${start} / ${end}`,
      }
    }

    if (value.match(/^-?\d+-span-\d+$/)) {
      let [_, start, span] = value
        .matchAll(/^(-?\d+)-span-(\d+)$/g)
        .next().value
      return {
        'grid-row': `${start} / span ${span}`,
      }
    }
  },
}
