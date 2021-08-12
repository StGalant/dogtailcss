export const order = {
  order(value: string) {
    if (!value) return

    let order = value
    if (value === 'first') {
      order = '-9999'
    }
    if (value === 'last') {
      order = '9999'
    }
    if (value === 'none') {
      order = '0'
    }

    if (order !== '0' && !parseInt(order)) {
      order = ''
    }

    if (order) {
      return {
        order,
      }
    }
  },
}
