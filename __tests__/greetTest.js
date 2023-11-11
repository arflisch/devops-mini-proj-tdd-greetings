const greet = require('../greet')

describe('greet', () => {
  it('1: Greet someone', () => {
    expect(greet('Albert')).toBe('Hello, Albert.')
  })

  it('2: Greet undifined, null, empty values', () => {
    expect(greet(null)).toBe('Hello, my friend.')
    expect(greet(undefined)).toBe('Hello, my friend.')
    expect(greet(' ')).toBe('Hello, my friend.')
  }
  )
})
