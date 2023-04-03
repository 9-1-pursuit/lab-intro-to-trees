const { TreeNode, Tree } = require("../");

describe("Tree", () => {
  describe("treeA.findNode()", () => {
    let treeA;
    beforeEach(() => {
      /*
          A
        ┌─┼─┐
        B C D──┐
      ┌─┼─┐    │
      E F G    H
    */
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
      treeA = new Tree(a);
    });
    it("should return a reference to the root node if it exists", () => {
      const actual = treeA.findNode("A");
      const expected = treeA.root;

      expect(actual).toEqual(expected);
    });

    it("should return a reference to an internal node if it exists", () => {
      const actual = treeA.findNode("D");
      const expected = treeA.root.children[2];

      expect(actual).toEqual(expected);
      // {"children": [{"children": [], "data": "H"}], "data": "D"}
    });

    it("should return a reference to a leaf node if it exists", () => {
      const actual1 = treeA.findNode("H");
      const expected1 = treeA.root.children[2].children[0];

      expect(actual1).toEqual(expected1);

      const actual2 = treeA.findNode("F");
      const expected2 = treeA.root.children[0].children[1];

      expect(actual2).toEqual(expected2);
    });

    it("should return null if the node does not exist", () => {
      const actual = treeA.findNode("Z");
      const expected = null;

      expect(actual).toEqual(expected);
      //  null
    });
  });

  describe("treeB.findNode()", () => {
    let treeB;
    beforeEach(() => {
      /*
        ┌─A─┐
      ┌─B   C─┐
      D       E─┐ 
                F─┐
                  G─┐
                    H─┐
                      I     
    */
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
      treeB = new Tree(a);
    });
    it("should return a reference to the root node if it exists", () => {
      const actual = treeB.findNode("A");
      const expected = treeB.root;

      expect(actual).toEqual(expected);
    });

    it("should return a reference to an internal node if it exists", () => {
      const actual1 = treeB.findNode("E");
      const expected1 = treeB.root.children[1].children[0];

      expect(actual1).toEqual(expected1);
    
      const actual2 = treeB.findNode("G");
      const expected2 =
        treeB.root.children[1].children[0].children[0].children[0];
      expect(actual2).toEqual(expected2);
    });

    it("should return a reference to a leaf node if it exists", () => {
      const actual1 = treeB.findNode("D");
      const expected1 = treeB.root.children[0].children[0];

      expect(actual1).toEqual(expected1);

      const actual2 = treeB.findNode("I");
      const expected2 =
        treeB.root.children[1].children[0].children[0].children[0].children[0]
          .children[0];

      expect(actual2).toEqual(expected2);
    });

    it("should return null if the node does not exist", () => {
      const actual = treeB.findNode("Z");
      const expected = null;

      expect(actual).toEqual(expected);
      // null
    });
  });
});
