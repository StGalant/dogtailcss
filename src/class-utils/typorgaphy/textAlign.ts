export const textAlign = {
  text(value: string) {
    if (/^left|center|right|justify$/.test(value)) {
      {
        return {
          'text-align': value,
        }
      }
    }
  },
}
