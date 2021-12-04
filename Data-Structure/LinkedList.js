class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


// constructor: create node
// push: create node, put in to the end
// unshift: create node, put in to the head of list
// insert: create node, put into the list
class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push (value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        
        return this
    }

    pop () {
        if (!this.tail) {
            return undefined
        } else {
            let tmp = this.head
            let pre = this.head

            while (tmp.next) {
                pre = tmp
                tmp = tmp.next
            }

            this.tail = pre
            this.tail.next = null

            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            } 

            return tmp
        }
    }

    unshift (value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        if (this.length === 1) {
            this.tail = this.head
        }

        return this
    }

    shift () {
        if (!this.head) {
            return undefined
        } else {
            tmp = this.head
            this.head = this.head.next
            tmp.next = null
            this.length--
            if (this.length === 0) {
                this.tail = null
            }

            return tmp
        }
    }

    get (index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let tmp = this.head
        for(let i = 0; i < index; i ++) {
            tmp = tmp.next
        }
        return tmp
    }

    set (index, value) {
        let tmp = this.get(index)
        if (tmp) {
            tmp.value = value
            return true
        }
        return false
    }

    insert (index, value) {
        if (index < 0 || index > (this.length)) return false
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)

        const newNode = new Node(value)
        let tmp = this.get(index - 1)
        newNode.next = tmp.next
        tmp.next = newNode
        this.length++
        return true
    }

    remove (index) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === (this.length) - 1) return this.pop()

        let before = this.get(index - 1)
        let tmp = before.next

        before.next = tmp.next
        tmp.next = null
        this.length--

        return tmp
    }

    reverse () {
        let tmp = this.head
        this.head = this.tail
        this.tail = tmp

        let pre = null
        let next = tmp.next

        for (let i = 0; i < this.length; i++) {
            next = tmp.next
            tmp.next = pre
            pre = tmp
            tmp = next
        }

        return this
    }
}

let myLinkedList = new LinkedList(4)