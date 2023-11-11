const greet = require('../greet')

describe('greet', () => {
  it('1: Greet someone', () => {
    expect(greet('Albert')).toBe('Hello, Albert.')
  })
})
