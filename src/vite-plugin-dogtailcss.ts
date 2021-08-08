export default function TailCssPlugin() {
  return {
    name: 'tailcss-plugin',
    buildStart() {
      //read config
      //create dogtailcss instance
      //Build dogtail.css file
    },
    handleHotUpdate(ctx: { file: string; modules: Array<any> }) {
      //Update dogtail.css file
      return ctx.modules
    },
  }
}
