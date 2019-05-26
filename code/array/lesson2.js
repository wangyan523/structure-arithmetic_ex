export default arr => {
  let str = arr.sort().join('')
  let group = str.match(/(\d)\1+|\d/g)
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
}
