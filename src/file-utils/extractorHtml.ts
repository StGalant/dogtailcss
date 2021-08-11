export default function extractor(html: string): Set<string> {
  let result = new Set<string>()

  const regex = /<\w+[^<>]+\sclass\s*=\s*"([^<>"]+)"[^<>]*>/gms
  let m = regex.exec(html)
  while (m !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }

    m.forEach((match, groupIndex) => {
      if (groupIndex > 0) {
        match
          .trim()
          .split(/\s+/s)
          .forEach((className) => {
            result.add(className)
          })
      }
    })
    m = regex.exec(html)
  }

  return result
}
