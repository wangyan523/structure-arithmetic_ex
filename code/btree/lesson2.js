class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = undefined
  }
}

class Tree {
  constructor (data) {
    let root = new Node(data.shift())
    data.forEach(item => {
      this.insert(root, item)
    })
    return root
  }
}

export default Tree

export { Node }
