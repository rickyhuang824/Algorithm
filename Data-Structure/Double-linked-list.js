class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push (value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++

        return this
    }

    pop () {
        if (!this.head) return undefined
        const tmp = this.tail
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.tail = tmp.prev
            this.tail.next = null
            tmp.prev = null
        }
        this.length--

        return tmp
    }

    unshift (value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.length++

        return this
    }

    shift () {
        if (!this.head) return undefined
        const tmp = this.head
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            tmp.next = null
        }
        this.length--

        return tmp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let tmp = this.head
        if (index < (this.length)/2) {
            for (let i = 0; i < index; i++) {
                tmp = tmp.next
            }
        } else {
            tmp = this.tail
            for(let i = this.length - 1; i > index; i--) {
                tmp = tmp.prev
            }
        }

        return tmp
    }

    set(index, value) {
        const tmp = this.get(index)
        if (tmp) {
            tmp.value = value
            return true
        }

        return false
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.unshift(value)
        if (index === this.length - 1) return this.push(value)

        const newNode = new Node(value)
        const tmp = this.get(index)
        const prev = tmp.prev
        prev.next = newNode
        newNode.prev = prev
        tmp.prev = newNode
        newNode.next = tmp

        this.length++

        return this
    }

    remove (index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const tmp = this.get(index)
        tmp.prev.next = tmp.next
        tmp.next.prev = tmp.prev
        tmp.next = null
        tmp.prev = null
        this.length--

        return tmp
    }
}

const myDoublyLinkedList = new DoublyLinkedList(1)
