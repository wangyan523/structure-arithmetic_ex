class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = undefined
  }
}

class Tree {
  constructor (data) {
    let nodeList = []
    let root
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        let n = Math.floor(Math.sqrt(i + 1))
        let q = Math.pow(2, n) - 1
        let p = Math.pow(2, n - 1) - 1
        let parent = nodeList[p + Math.floor((i - q) / 2)]
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    root = nodeList.shift()
    nodeList.length = 0
    return root
  }
  static isSymmetry (root) {
    if (!root) {
      return true
    }
    let walk = (left, right) => {
      if (!left && !right) {
        return true
      }
      if ((left && !right) || (!left && right) || left.val !== right.val) {
        return false
      }
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
    return walk(root.left, root.right)
  }
}

export default Tree

export { Node }
