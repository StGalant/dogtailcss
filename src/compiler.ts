import theme from './theme'

const classCompiler = {
  plugins: new Map<string, any>(),
  css: {} as any,
  ctx: {
    theme,
    varPrefix: 't',
    varColorPrefix: 't-color',
    pseudo: {
      h: 'hover',
      hover: 'hover',
      f: 'focus',
      focus: 'focus',
      a: 'active',
      active: 'active',
      v: 'visited',
      visited: 'visited',
      'focus-visible': 'focus-visible',
      fw: 'focus-within',
      'focus-within': 'focus-within',
    } as any,
  },
  init(plugins: any) {
    this.plugins.clear()
    for (let pluginName in plugins) {
      if (typeof plugins[pluginName] !== 'object') {
        continue
      }
      let plugin = plugins[pluginName]
      for (let prop in plugin) {
        if (['name'].includes(prop)) {
          continue
        }
        this.plugins.set(prop, plugin)
      }
    }

    this.css.normal = new Map<string, any>()
    for (let bp in this.ctx.theme.mediaScreens) {
      this.css[bp] = new Map<string, any>()
    }
  },
  addClass(className: string) {
    for (let bp in this.css) {
      let classObj = this.css[bp].get(className)
      if (classObj) {
        classObj.linkCounter += 1
        return
      }
    }

    let media = 'normal'
    let pseudo: string[] = []
    let parts = className.split(':')
    let pureClass = ''
    parts.forEach((value) => {
      if (this.ctx.theme.mediaScreens[value]) {
        if (
          media == 'normal' ||
          this.ctx.theme.mediaScreens[value] <
            this.ctx.theme.mediaScreens[media]
        )
          media = value
        return
      }
      if (this.ctx.pseudo[value]) {
        pseudo.push(value)
        return
      }
      pureClass = value
    })
    let escClassName =
      className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ':' + pseudo.join(':')
    let rule = this.compileClass(pureClass)
    if (rule && escClassName) {
      this.css[media].set(className, {
        className: escClassName,
        rule,
        linkCounter: 1,
      })
    }
  },
  compileClass(className: string) {
    let dashIndex = className.length
    while (dashIndex > 0) {
      let tmpClassName = className.substring(0, dashIndex)
      if (this.plugins.has(tmpClassName)) {
        let plugin = this.plugins.get(tmpClassName)
        let rules = plugin[tmpClassName].call(
          undefined,
          className.substring(dashIndex + 1),
          this.ctx
        )
        if (rules) {
          return rules
        }
      }
      dashIndex = className.lastIndexOf('-', dashIndex - 1)
    }
  },
  removeClass(className: string) {
    for (let bp in this.css) {
      let classObj = this.css[bp].get(className)
      if (classObj) {
        classObj.linkCounter -= 1
        if (classObj.linkCounter < 1) {
          this.css[bp].delete(className)
        }
      }
    }
  },
}

export default classCompiler
