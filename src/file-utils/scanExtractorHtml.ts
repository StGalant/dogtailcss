enum S {
  WAIT_FOR_TAG,
  IS_TAG,
  IS_COMMENT,
  SKIP_TAG,
  SKIP_COMMENT,
  IS_COMMENT_END,
  WAIT_FOR_ATTR,
  IS_CLASS,
  SKIP_ATTR,
  SKIP_STRING_VALUE,
  WAIT_CAPTURE_CLASS,
  CAPTURE_CLASS,
}

const classAttr = 'class="'

function isSpace(c: string): boolean {
  return (
    c === ' ' ||
    c === '\u0009' ||
    c === '\u000A' ||
    c === '\u000C' ||
    c === '\u000D'
  )
}

function isAlphaNum(c: string): boolean {
  return (
    (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
  )
}

export default function (html: string): Set<string> {
  let result = new Set<string>()

  let state = S.WAIT_FOR_TAG
  let stateCounter = 0
  let pos = 0
  let c = ''
  for (pos = 0; pos < html.length; pos++) {
    c = html.charAt(pos)

    //wait for tag
    if (state === S.WAIT_FOR_TAG) {
      if (c === '<') state = S.IS_TAG
      continue
    }
    // start tag name
    if (state === S.IS_TAG) {
      if (c === '!') {
        state = S.IS_COMMENT
        stateCounter = 0
        continue
      }
      if (c === '/' || isSpace(c) || !isAlphaNum(c)) {
        state = S.WAIT_FOR_TAG
        continue
      }
      state = S.SKIP_TAG
      continue
    }
    //comments
    if (state === S.IS_COMMENT) {
      if (c !== '-') {
        state = S.WAIT_FOR_TAG
        continue
      }
      stateCounter += 1
      if (stateCounter === 2) {
        stateCounter = 0
        state = S.SKIP_COMMENT
      }
      continue
    }
    if (state === S.SKIP_COMMENT) {
      if (c === '-') {
        state = S.IS_COMMENT_END
        stateCounter = 0
        continue
      }
      continue
    }
    if (state === S.IS_COMMENT_END) {
      if (c === '-') {
        stateCounter = 1
        continue
      }
      if (c === '>' && stateCounter === 1) {
        state = S.WAIT_FOR_TAG
        stateCounter = 0
        continue
      }
      state = S.SKIP_COMMENT
      stateCounter = 0
      continue
    }

    //tag
    if (state === S.SKIP_TAG) {
      if (isSpace(c)) {
        state = S.WAIT_FOR_ATTR
        stateCounter = 0
        continue
      }
      if (c === '>') {
        state = S.WAIT_FOR_TAG
        continue
      }
      continue
    }

    if (state === S.WAIT_FOR_ATTR) {
      //end tag ckeck
      if (c === '>') {
        state = S.WAIT_FOR_TAG
        continue
      }
      if (isAlphaNum(c)) {
        if (c === classAttr[0]) {
          state = S.IS_CLASS
          stateCounter = 1
          continue
        }
        state = S.SKIP_ATTR
        continue
      }
      continue
    }

    if (state === S.SKIP_ATTR) {
      if (c === '>') {
        state = S.WAIT_FOR_TAG
        continue
      }
      if (c === '"') {
        state = S.SKIP_STRING_VALUE
        continue
      }
      if (isSpace(c)) {
        state = S.WAIT_FOR_ATTR
        continue
      }
      continue
    }

    if (state === S.SKIP_STRING_VALUE) {
      if (c === '"') {
        state = S.WAIT_FOR_ATTR
        continue
      }
      continue
    }

    if (state === S.IS_CLASS) {
      if (c === classAttr[stateCounter]) {
        stateCounter += 1
        if (stateCounter === classAttr.length) {
          state = S.WAIT_CAPTURE_CLASS
        }
        continue
      }
      state = S.SKIP_ATTR
      continue
    }

    if (state === S.WAIT_CAPTURE_CLASS) {
      if (c === '"') {
        state = S.WAIT_FOR_ATTR
        continue
      }
      if (!isSpace(c)) {
        state = S.CAPTURE_CLASS
        stateCounter = pos
        continue
      }
      continue
    }

    if (state === S.CAPTURE_CLASS) {
      if (c === '"') {
        state = S.WAIT_FOR_ATTR
      }
      if (isSpace(c)) {
        state = S.WAIT_CAPTURE_CLASS
      }

      if (state !== S.CAPTURE_CLASS) {
        result.add(html.substring(stateCounter, pos))
      }
      continue
    }
  }

  return result
}
