class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-'\s]/g, '')
  }

  static titleize(string) {
    let newString = []
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const stringArray = string.split(" ")
    for (const word of stringArray) {
      if (exceptions.includes(word) && stringArray.indexOf(word) != 0) {
        newString.push(word)
      } else {
        newString.push(Formatter.capitalize(word))
        debugger
      }
    }
    return newString.join(" ")
  }
}