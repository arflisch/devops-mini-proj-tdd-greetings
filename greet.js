function greet (name) {
  // case 2 :
  if (name === null || name === undefined || name === ' ') {
    return 'Hello, my friend.'
  }

  if (Array.isArray(name)) {
    // case 4 :
    if (name.length === 2) {
      return `Hello, ${name[0]} and ${name[1]}.`
    }
    if (name.length === 4) {
      return `Hello, ${name[0]}, ${name[1]}, ${name[2]} and ${name[3]}.`
    }
  }
  // case 3 :
  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`
  }
  // case 1 :
  return `Hello, ${name}.`
}

module.exports = greet
