class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length =  1
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.last) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++

        return this
    }

    dequeue() {
        if (!this.first) return undefined
        const tmp = this.first
        this.first = this.first.next
        tmp.next = null
        this.length--
        if (this.length === 0) this.last = null

        return tmp
    }

}