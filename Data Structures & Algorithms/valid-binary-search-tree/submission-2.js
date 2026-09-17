/**
 * Definition for a binary tree node.
 */

// class TreeNode {
//     constructor(val = 0, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

class Solution {

    navigateNode(node, max, min) {
        let leftResult = true;
        let rightResult = true;

        if (node.left) {
            if (node.left.val >= node.val || node.left.val <= min) {
                leftResult = false;
            } else {
                leftResult = this.navigateNode(node.left, node.val, min);
            }
        }

        if (node.right) {
            if (node.right.val <= node.val || node.right.val >= max) {
                rightResult = false;
            } else {
                rightResult = this.navigateNode(node.right, max, node.val);
            }
        }

        if (!leftResult) return false;
        if (!rightResult) return false;

        return true;
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {

        return this.navigateNode(root, Infinity, -Infinity);

    }
}
