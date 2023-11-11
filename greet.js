// case 1 : 
function greet (name) {
  if(name===null || name=== undefined || name ===' ') {
    return 'Hello, my friend.'
  }else{
    return `Hello, ${name}.`
  }
}

module.exports = greet
