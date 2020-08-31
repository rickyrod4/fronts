class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class SLL {
     // constructor, other methods, removed for brevity
    constructor(){
        this.head = null;
    }
    //Adds Node to Front
     addFront(value) {
     var n1 = new Node(value);
     this.head = n1;
     return this.head
    }
    removeFront(){
        return this.head = null;
    }
    front(){
        return this.head.data;
    }
 }
