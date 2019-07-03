export default (src, dst, k) => {
  let fights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
  let cheap = (src, dst, k) => {
    let prev = fights.filter(item => item[1] === dst)
    let min = Math.min.apply(
      null,
      prev.map(item => {
        if (item[0] === src && k > -1) {
          return item[2]
        } else if (k === 0 && item[0] !== src) {
          return Number.MAX_SAFE_INTEGER
        } else {
          return item[2] + cheap(src, item[0], k - 1)
        }
      })
    )
    return min
  }
  return cheap(src, dst, k) || -1
}
