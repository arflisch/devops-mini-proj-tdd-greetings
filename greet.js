function greet (name, language = 'EN') {
  if (!Array.isArray(name)) {
    // Case 2: Handle null, undefined, and empty values.
    if (name === null || name === undefined || name === ' ') {
      if (language === 'FR') {
        return 'Bonjour, mon ami'
      }
      if (language === 'NL') {
        return 'Hallo, mijn vriend'
      }
      return 'Hello, my friend.'
    }

    // Case 3:  Greet Uppercase names
    if (name === name.toUpperCase()) {
      if (language === 'FR') {
        return `BONJOUR, ${name}!`
      }
      if (language === 'NL') {
        return `HALLO, ${name}!`
      }
      return `HELLO, ${name}!`
    }
    // case 1 : Greet someone in multiple languages
    if (language === 'FR') {
      return `Bonjour, ${name}.`
    }
    if (language === 'NL') {
      return `Hallo, ${name}.`
    }
    return `Hello, ${name}.`
  }

  // case 4 : Greet 2 names in multiple languages
  if (name.length === 2) {
    if (language === 'FR') {
      return `Bonjour, ${name[0]} et ${name[1]}.`
    }
    if (language === 'NL') {
      return `Hallo, ${name[0]} en ${name[1]}.`
    }
    return `Hello, ${name[0]} and ${name[1]}.`
  }
  // case 6 : Greet Uppercase and lowercase names in multiple languages
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
    if (language === 'FR') {
      return `Bonjour, ${lowercaseNames
        .slice(0, -1)
        .join(', ')} and ${lowercaseNames.slice(
        -1
    )}. ET BONJOUR ${upperCaseNames.join(' ')}!`
    }
    if (language === 'NL') {
      return `Hallo, ${lowercaseNames
        .slice(0, -1)
        .join(', ')} and ${lowercaseNames.slice(
        -1
    )}. EN HALLO ${upperCaseNames.join(' ')}!`
    }
    return `Hello, ${lowercaseNames
            .slice(0, -1)
            .join(', ')} and ${lowercaseNames.slice(
            -1
        )}. AND HELLO ${upperCaseNames.join(' ')}!`
  }

  // case 5 : Greet more than 2 names in multiples languages
  if (name.length > 2) {
    if (language === 'FR') {
      return `Bonjour, ${name.slice(0, -1).join(', ')} et ${name.slice(-1)}.`
    }
    if (language === 'NL') {
      return `Hallo, ${name.slice(0, -1).join(', ')} en ${name.slice(-1)}.`
    }
    return `Hello, ${name.slice(0, -1).join(', ')} and ${name.slice(-1)}.`
  }
}

module.exports = greet
