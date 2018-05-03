const priceConvert = (price) => {
  if (price) {
      let result = Math.round(price).toString();
      if (result.length > 3) {
          result = result.split("")
          result.splice(result.length - 3, 0, ",")
          result = result.join("")
      }
      if (result.length > 7) {
          result = result.split("")
          result.splice(result.length - 7, 0, ",")
          result = result.join("")
      }
      return result
  }
  if (price === 0) {
      return 0
  }
  return ""
}

export {
  priceConvert
}