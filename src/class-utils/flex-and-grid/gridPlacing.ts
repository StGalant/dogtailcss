export const gridPlacing = {
  // Columns
  'col-start'(value: string) {
    if (value === 'auto') {
      return {
        'grid-column-start': 'auto',
      }
    }

    if (/^-?\d+$/.test(value)) {
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

    if (/^-?\d+$/.test(value)) {
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

    if (/^\d+$/.test(value)) {
      return {
        'grid-column': `span ${value} / span ${value}`,
      }
    }
  },
  col(value: string) {
    if (/^-?\d+--?\d+$/.test(value)) {
      let [_, start, end] = value.matchAll(/^(-?\d+)-(-?\d+)$/g).next().value
      return {
        'grid-column': `${start} / ${end}`,
      }
    }

    if (/^-?\d+-span-\d+$/.test(value)) {
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

    if (/^-?\d+$/.test(value)) {
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

    if (/^-?\d+$/.test(value)) {
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

    if (/^\d+$/.test(value)) {
      return {
        'grid-row': `span ${value} / span ${value}`,
      }
    }
  },
  row(value: string) {
    if (/^-?\d+--?\d+$/.test(value)) {
      let [_, start, end] = value.matchAll(/^(-?\d+)-(-?\d+)$/g).next().value
      return {
        'grid-row': `${start} / ${end}`,
      }
    }

    if (/^-?\d+-span-\d+$/.test(value)) {
      let [_, start, span] = value
        .matchAll(/^(-?\d+)-span-(\d+)$/g)
        .next().value
      return {
        'grid-row': `${start} / span ${span}`,
      }
    }
  },
}
