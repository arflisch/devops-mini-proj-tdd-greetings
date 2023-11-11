const greet = require('../greet')

describe('greet', () => {
  it('1: Greet someone', () => {
    expect(greet('Albert')).toBe('Hello, Albert.')
  })

  it('2: Greet undifined, null, empty values', () => {
    expect(greet(null)).toBe('Hello, my friend.')
    expect(greet(undefined)).toBe('Hello, my friend.')
    expect(greet(' ')).toBe('Hello, my friend.')
  })

  it('3: Greet Uppercase names', () => {
    expect(greet('ARNAUD')).toBe('HELLO, ARNAUD!')
  })

  it('4: Greet 2 names', () => {
    expect(greet(['Laurent', 'Alexandre'])).toBe(
      'Hello, Laurent and Alexandre.'
    )
  })
  it('5: Greet more than 2 names', () => {
    expect(greet(['Laurent', 'Alexandre', 'Arnaud', 'Emeric'])).toBe(
      'Hello, Laurent, Alexandre, Arnaud and Emeric.'
    )
  })
  it('6: Greet Uppercase and lowercase names', () => {
    expect(greet(['Laurent', 'Daniel', 'ALEXANDRE'])).toBe(
      'Hello, Laurent and Daniel. AND HELLO ALEXANDRE!'
    )
  })
})
