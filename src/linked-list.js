const Node = require('./node');

class LinkedList {
    constructor(head = null, tail = null, length = 0) {
        this._head = head;
        this._tail = tail;
        this.length = length;
    }

    append(data) {
        
        if(!this._head){
            let node = new Node(data);

            this._head = node;
            this._tail = node;
            this.length++;
        } else {
            let node = new Node(data, this._tail, this._head );
            this._tail = node;
            this.length++;
        }
        return this;
    }
    

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }
    head() { return this.length === 0 ? null : this._head.data ;}

    tail() { return this.length === 0 ? null : this._tail.data; }

    isEmpty() {
        return this.length === 0 ? true : false;
    }
    at(index) {
        let currentNode = this._head;
        console.log(currentNode.prev);
        for(let i = 0; i < index; i++){
        }
        return currentNode.data;
    }
}

let list = new LinkedList;
list.append(1);
list.append(123);
list.append(444);
list.append(3);
console.log(list.at(2));
/*
    at(index) {
        let currentNode = this.headNode;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}
*/
module.exports = LinkedList;
