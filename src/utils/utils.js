function optionsPrice(options) {
  console.log(options)
  if (options.length) {
    return options.map(option => option.price ? option.price : 0).reduce((prev, next) => prev + next)
  } else {
    return 0
  }
}

export {
  optionsPrice
}
