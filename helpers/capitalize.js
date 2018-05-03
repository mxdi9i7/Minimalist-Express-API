const capitalizeName = (name) => {
  let result = ""
  if (name) {
      let first = name[0].toUpperCase()
      let rest = name.slice(1)
      result = first + rest
  }
  return result
} 

export {
  capitalizeName
}