class Node {
constructor(val){
  this.val = val;
  this.next = null;
  }
}


class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  print(){
    let arr = [];
    let current = this.head;
    while (current){
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  
  push(val){
    let newNode = new Node(val);
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size;
  }
    

  pop(){
  if (this.size ===  0) return null;
    let first = this.first;
    if (this.size === 1){
      this.last = null;
    }
    this.first = this.first.next;
    --this.size; 
    return first.val;
  }
    
}

let stack = new Stack;



stack.push('hey')
stack.push('there')
stack.push('friend')