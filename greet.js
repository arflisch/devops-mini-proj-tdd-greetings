function greet (name) {
  if (!Array.isArray(name)) {
    // case 2 :
    if (name === null || name === undefined || name === ' ') {
      return 'Hello, my friend.'
    }
    // case 3 :
    if (name === name.toUpperCase()) {
      return `HELLO, ${name}!`
    }
    // case 1 :
    return `Hello, ${name}.`
  }
  // case 4 :
  if (name.length === 2) {
    return `Hello, ${name[0]} and ${name[1]}.`
  }
  // case 6 :
  const lowercaseNames = []
  const upperCaseNames = []
  name.forEach((n) => {
    if (n === n.toUpperCase()) {
      upperCaseNames.push(n)
    } else {
      lowercaseNames.push(n)
    }
  })
  if (lowercaseNames.length > 0 && upperCaseNames.length > 0) {
    return `Hello, ${lowercaseNames
            .slice(0, -1)
            .join(', ')} and ${lowercaseNames.slice(
            -1
        )}. AND HELLO ${upperCaseNames.join(' ')}!`
  }

  // case 5 :
  if (name.length > 2) {
    return `Hello, ${name.slice(0, -1).join(', ')} and ${name.slice(-1)}.`
  }
}

module.exports = greet
