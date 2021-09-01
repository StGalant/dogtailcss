export const fontVariantNumeric = {
  'normal-nums'(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'normal',
    }
  },
  ordinal(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'ordinal',
    }
  },
  'slashed-zero'(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'slashed-zero',
    }
  },
  'lining-nums'(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'lining-nums',
    }
  },
  'oldstyle-nums'(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'oldstyle-nums',
    }
  },
  'proportional-nums'(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'proportional-nums',
    }
  },
  'tabular-nums'(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'tabular-nums',
    }
  },
  'diagonal-fractions'(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'diagonal-fractions',
    }
  },
  'stacked-fractions'(value: string) {
    if (value) return
    return {
      'font-variant-numeric': 'stacked-fractions',
    }
  },
}
