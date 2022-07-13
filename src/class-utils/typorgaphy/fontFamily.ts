export const fontFamily = {
  font(value: string) {
    // TODO: fonts from theme
    if (value === 'sans') {
      return {
        'font-family':
          'ui-sans-serif, system-ui, -apple-system, \
          BlinkMacSystemFont, "Segoe UI", Roboto, \
          "Helvetica Neue", Arial, "Noto Sans", sans-serif, \
          "Apple Color Emoji", "Segoe UI Emoji", \
          "Segoe UI Symbol", "Noto Color Emoji"',
      }
    }

    if (value === 'serif') {
      return {
        'font-family':
          'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      }
    }

    if (value === 'mono') {
      return {
        'font-family':
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \
          "Liberation Mono", "Courier New", monospace',
      }
    }
  },
}
