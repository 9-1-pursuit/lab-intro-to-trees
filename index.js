const { inspect } = require("util")
class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  // It should return either a reference to the node that contains that data or it should return null.
  // recursion, loop through each tree node, for each of it's children (if any) call function again to repeat cycle until .data = argument
  findNode(data, root = this.root) {
    if(root.data === data){
      return root
    }
    else{
      if(root.children.length > 0){
        const match = root.children.map(child => {
          if(child.data === data){
            console.log("child- stop", child)
            return child
          }
          else {
      console.log("recursion", child)
      this.findNode(data, child)
    }
  })
  console.log("match-stop", match)
  const [node] = match.filter(el => el !== undefined)
  return node ? node : null
}
    }
   
  
}
}

/* Tree {
  root: TreeNode {
    data: 'A',
    children: [
      TreeNode {
        data: 'B',
        children: [
          TreeNode { data: 'E', children: [] },
          TreeNode { data: 'F', children: [] },
          TreeNode { data: 'G', children: [] }
        ]
      },
      TreeNode { data: 'C', children: [] },
      TreeNode {
        data: 'D',
        children: [ TreeNode { data: 'H', children: [] } ]
      }
    ]
  }
} */

/* function searchTree(element, matchingTitle){
  if(element.title == matchingTitle){
       return element;
  }else if (element.children != null){
       var i;
       var result = null;
       for(i=0; result == null && i < element.children.length; i++){
            result = searchTree(element.children[i], matchingTitle);
       }
       return result;
  }
  return null;
} */


let treeTest
const a = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");
const g = new TreeNode("G");
const h = new TreeNode("H");
a.children.push(b, c, d);
b.children.push(e, f, g);
d.children.push(h);
treeTest = new Tree(a);
// console.log(inspect(treeTest, { colors: true, depth: 12 }))
console.log(treeTest.findNode("H"))


module.exports = { TreeNode, Tree };
