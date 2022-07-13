// my-custom-environment
import { createCssCompiler } from '../../src/cssCompiler.js'
import { createClassUtils } from '../../src/class-utils/index.js'
import { theme } from '../../src/theme/index.js'

export default function (tabSize = 4) {
  let utils = createClassUtils()
  let compile = createCssCompiler(utils, theme, { tabSize })
  let compileOpacity = createCssCompiler(
    utils,
    { ...theme, ...{ useVarOpacity: true } },
    { tabSize }
  )
  let t = ' '.repeat(tabSize)

  return {
    t,
    compile,
    compileOpacity,
  }
}
