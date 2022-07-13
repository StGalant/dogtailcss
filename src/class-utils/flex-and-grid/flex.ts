import { ClassUtility } from '../../index.js'

export const flex: ClassUtility = {
  'flex-1'(_value: string) {
    return {
      flex: '1 1 0%',
    }
  },
  'flex-auto'(_value: string) {
    return {
      flex: '1 1 auto',
    }
  },
  'flex-initial'(_value: string) {
    return {
      flex: '0 1 auto',
    }
  },
  'flex-none'(_value: string) {
    return {
      flex: 'none',
    }
  },

  //flex-[1,0,50%] => { flex: 1 0 50% }
  //flex-[1,1,max] => { flex: 1 1 max-content}
  //no CSS correctness check sorry
  flex(value: string) {
    if (/^\[\w+,\w+,\w+%?\]$/.test(value)) {
      let [_, grow, shrink, basis] = value
        .matchAll(/^\[(\w+),(\w+),(\w+%?)\]$/g)
        .next().value as string[]
      basis = basis.replace(/^(min|max|fit)$/, '$&-content')
      return {
        flex: `${grow} ${shrink} ${basis}`,
      }
    }
  },
}
