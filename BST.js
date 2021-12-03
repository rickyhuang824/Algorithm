class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// class BST {
//     constructor(value) {
//         const newNode = new Node(value)
//         this.root = newNode
//     }
// }

// if the bst is allowed for duplicated value, then you would have another property called count in the node object to count how many times the numbers appear



class BST {
    constructor() {
        this.root = null
    }


    // insert
    // 1. create a new node
    // 2. if root === null, then root = new Node return
    // 3. let tmp = root
    // 4. while loop
    // 5. if newNode === tmp return undefined
    // 6. if < left else > right
    //      7. if null then insert else move to next

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let tmp = this.root

        while (true) {
            if (value === tmp.value) return undefined

            if (value < tmp.value) {
                if (tmp.left === null) {
                    tmp.left = newNode
                    return this
                }
                tmp = tmp.left
            } else {
                if (tmp.right === null) {
                    tmp.right = newNode
                    return this
                }
                tmp = tmp.right
            }
        }
    }

    contains (value) {
        if (!this.root) return false
        let tmp = this.root
        while(tmp) {
            if (tmp.value === value) return true
            if (value < tmp.value) {
                tmp = tmp.left
            } else {
                tmp = tmp.right
            }
        }

        return false
    }

    // alse the subtree
    minValueNode(currentNode) {
        while (currentNode.left) {
            currentNode = currentNode.left
        } 

        return currentNode
    }
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(52)
myTree.insert(82)
myTree.minValueNode(myTree.root)
