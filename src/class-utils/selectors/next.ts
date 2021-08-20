import { withSelector } from '../utilHelpers.js'

export const nextSelector = {
  next(value: string) {
    return withSelector(
      {},
      {
        place: 'after',
        text: `+ ${value || '*'}`,
      }
    )
  },
}
