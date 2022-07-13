export const gridAuto = {
  'auto-cols'(value: string) {
    if (!value) return
    let autoCols = ''

    switch (value) {
      case 'auto':
        autoCols = 'auto'
        break
      case 'min':
        autoCols = 'min-content'
        break
      case 'max':
        autoCols = 'max'
        break
      case 'fr':
        autoCols = 'minmax(0, 1fr)'
    }
    // auto-rows-2fr => { grid-auto-rows: monmax(0, 2fr); }
    if (!autoCols) {
      if (/^\d+(\.\d+)?(fr|px|%)$/.test(value)) {
        autoCols = `minmax(0, ${value})`
      }
    }

    // auto-rows-(10px,auto) => { grid-auto-rows: monmax(10px,auto); }
    if (!autoCols) {
      if (/^\(.+\)$/.test(value)) {
        autoCols = `minmax${value}`
      }
    }

    if (!autoCols) return
    return {
      'grid-auto-columns': autoCols,
    }
  },
  'auto-rows'(value: string) {
    if (!value) return
    let autoRows = ''

    switch (value) {
      case 'auto':
        autoRows = 'auto'
        break
      case 'min':
        autoRows = 'min-content'
        break
      case 'max':
        autoRows = 'max'
        break
      case 'fr':
        autoRows = 'minmax(0, 1fr)'
    }

    // auto-rows-2fr => { grid-auto-rows: monmax(0, 2fr); }
    if (!autoRows) {
      if (/^\d+(fr|px|%)$/.test(value)) {
        autoRows = `minmax(0, ${value})`
      }
    }

    // auto-rows-(10px,auto) => { grid-auto-rows: monmax(10px,auto); }
    if (!autoRows) {
      if (/^\(.+\)$/.test(value)) {
        autoRows = `minmax${value.substring(1, value.length - 1)}`
      }
    }

    if (!autoRows) return
    return {
      'grid-auto-rows': autoRows,
    }
  },
}
