class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root, obj = { res: [] }) {
    if (!root) {
      obj.res.push('null');

      return 'null';
    }

    obj.res.push(root.val);

    this.serialize(root.left, obj);
    this.serialize(root.right, obj);

    return obj.res.join(',');
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data, dataParsed = data.split(','), obj = { index: 0 }) {
    const val = dataParsed[obj.index];
    obj.index++;

    if (val === 'null') {
      return null;
    }

    const node = new TreeNode(parseInt(val));
    node.left = this.deserialize(data, dataParsed, obj);
    node.right = this.deserialize(data, dataParsed, obj);

    return node;
  }
}

const left = new TreeNode(2);
const right = new TreeNode(3);
const root = new TreeNode(1, left, right);

const data = new Codec().serialize(root);
const res = new Codec().deserialize(data);
console.log(res);
