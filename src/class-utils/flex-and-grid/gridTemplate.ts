export const gridTemplate = {
  // grid-cols-5 => { grid-template-columns: repeat(5, 1fr); }
  'grid-cols'(value: string) {
    if (value.match(/^\d+$/g)) {
      return {
        'grid-template-columns': `repeat(${value}, minmax(0, 1fr))`,
      }
    }
    if (value === 'none') return { 'grid-template-columns': 'none' }

    // grid-cols-[60px,1fr,50%] => { grid-template-columns: 60px 1fr 50%; }
    if (value.match(/^\[.+\]$/))
      return {
        'grid-template-columns': value
          .substring(1, value.length - 1)
          .replaceAll(',', ' '),
      }

    // grid-cols-(5,1fr) => { grid-template-columns: repeat(5,1fr); }
    if (value.match(/^\(\d+,.+\)$/))
      return {
        'grid-template-columns': `repeat${value}`,
      }
  },
}
