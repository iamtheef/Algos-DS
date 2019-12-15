class Node {
constructor(val){
  this.val = val;
  this.next = null;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this;
  }
    

  pop(){
  if (this.length === 0) return undefined;
  if (this.length === 1) {
        this.head = null;
        this.tail = null;
   }
   let current =  this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
    return current;
  }

  shift(){
    if (!this.head) return undefined;
    let removed = this.head;
    this.head = removed.next;
    this.length--;
    return removed
  }

  unshift(val){
    let newNode = new Node(val);
    if (this.length == 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(indx){
    if (indx<0 || indx>=this.length) return null;
    let i=0;
    let current = this.head;
    while(i !== indx){
      current = current.next;
      i++;
    }
    return current;
  }

  set(i,val){
    let node = this.get(i);
    if (node){
        node.val = val;
        return true;
    }
    return false; 

  }

  insert(i,val){
    if (i<0 || i>this.length) return false;
    if (i == this.length) return this.push(val);
    if (i == 0) return this.unshift(val);
      let newNode = new Node(val);
      let prev = this.get(i-1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
     this.length++;
     return true;
  }

  remove(i){
    if (i<0 || i>=this.length) return false;
    if (i === this.length-1) return this.pop();
    if (i === 0) return this.shift();
    let prev = this.get(i-1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }


  sort(){
      if (this.length === 0 || this.length === 1) return undefined;
      let current = this.head;
      let temp;
      let noSwaps = true;
      let count = 0;

      while(!noSwaps || current.next){

          if (current.next === null){
              current = this.head;
              noSwaps = true;
          }

          if (current.val > current.next.val){
              temp = current.val;
              current.val = current.next.val;
              current.next.val = temp;
              noSwaps = false;
          }
          current = current.next;
          count++;
      }
      console.log(count);
      return this;
  }
    
}

let list = new LinkedList;



list.push(4)
list.push(1)
list.push(-3)
list.push(99)