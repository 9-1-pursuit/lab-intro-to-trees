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
    // let match = null
    console.log("root", root)
    if(root.data === data){
      console.log("rootData")
      return root
    }
    if(root.children.length === 0){
      return null
    }
    const match = root.children.map(child => {
      console.log("child", child)
      if(child.data === data){
        console.log("rootData")
        return child
      }
      if(child.children.length === 0){
        console.log('no children')
        return null
      }
      if(child.children.length > 0){
        const  children = child.children
        for(let i = 0; i < children.length; i++){
           if(children[i].data === data){
            console.log("child- stop", children[i])
            return children[i]
            }
            else {
              console.log("recursion", children[i])
              // this.findNode(data, children[i])
              return this.findNode(data, children[i])
            }
          }
    }
      return null
    })
    console.log("match", match)
    const node = match.find(el => el !== null) ? 
    match.find(el => el !== null) : 
    null

    return node
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


// let treeTest
// const a = new TreeNode("A");
// const b = new TreeNode("B");
// const c = new TreeNode("C");
// const d = new TreeNode("D");
// const e = new TreeNode("E");
// const f = new TreeNode("F");
// const g = new TreeNode("G");
// const h = new TreeNode("H");
// a.children.push(b, c, d);
// b.children.push(e, f, g);
// d.children.push(h);
// treeTest = new Tree(a);
// console.log(inspect(treeTest, { colors: true, depth: 12 }))
// console.log(treeTest.findNode("F"))
// {"children": [], "data": "F"}


let treeTest2
const a = new TreeNode("A");
      const b = new TreeNode("B");
      const c = new TreeNode("C");
      const d = new TreeNode("D");
      const e = new TreeNode("E");
      const f = new TreeNode("F");
      const g = new TreeNode("G");
      const h = new TreeNode("H");
      const i = new TreeNode("I");
      a.children.push(b, c);
      b.children.push(d);
      c.children.push(e);
      e.children.push(f);
      f.children.push(g);
      g.children.push(h);
      h.children.push(i);
      treeTest2 = new Tree(a);
  console.log(inspect(treeTest2, { colors: true, depth: 12 }))
console.log(treeTest2.findNode("I"))

/* Tree {
  root: TreeNode {
    data: 'A',
    children: [
      TreeNode {
        data: 'B',
        children: [ TreeNode { data: 'D', children: [] } ]
      },
      TreeNode {
        data: 'C',
        children: [
          TreeNode {
            data: 'E',
            children: [
              TreeNode {
                data: 'F',
                children: [
                  TreeNode {
                    data: 'G',
                    children: [
                      TreeNode { data: 'H', children: [ [TreeNode] ] }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
} */


module.exports = { TreeNode, Tree };



        // return match[0] ? match[0] : null
  //       root.children.forEach(child => {
  //         if(child.data === data){
  //           console.log("child- stop", child)
  //            match.push(child)
  //         }
  //         else {
  //     console.log("recursion", child)
  //     this.findNode(data, child)
  //   }
  // })


//       if(root.children.length > 0){
//         const match = root.children.map(child => {
//           if(child.data === data){
//             console.log("child- stop", child)
//             return child
//           }
//           else {
//       console.log("recursion", child)
//       this.findNode(data, child)
//     }
//   })
//   console.log("match-stop", match)
//   const [node] = match.filter(el => el !== undefined)
//   return node ? node : null
// }
