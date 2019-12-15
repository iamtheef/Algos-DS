
	
class Node {
	constructor(val){
	  this.val = val;
	  this.next = null;
	  this.prev = null;
	}
}


class DoublyLinkedList {
	  constructor(){
	    this.head = null;
	    this.tail = null;
	    this.length = 0;
	  }

push(val){
	let newNode = new Node(val);
	if (this.head == null){
		this.head = newNode;
		this.tail = this.head;
	}else{
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode; 
	}
	this.length++;
	return this;
	}

	print(){
		let arr = [];
		let current = this.head;
		if (this.length === 0){
			return 'Empty!'
		}
		for (let i=0; i<this.length; i++){
			arr.push(current.val);
			current = current.next;
		}
		return arr;
	}

	pop(){
		if (this.length === 0) return undefined;
		let oldTail = this.tail;
		if (this.length === 1){
			this.head = null;
			this.tail = null;
		}else{
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}
		this.length --;
		return oldTail;
	}

	shift(){
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1){
			this.head = null;
			this.tail = null;
		}else{
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val){
		let newNode = new Node(val);
		if (!this.head){
			this.head = newNode;
			this.tail = newNode;
		}else{
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(i){
		if (i >= this.length || i < 0) return null;
		if (i >= this.length/2){
			var current = this.tail;
			let j = this.length-1;
			while(j !== i){
				current = current.prev;
				j--;
			}
		}else{
			var current = this.head;
			let j = 0;
			while(j !== i){
				current = current.next;
				j++
			}
		}
		return current;
	}

	set(i,val){
		let index = this.get(i);
		if (index){
			index.val = val;
			return true; 
		}
		return false;
	}

	insert(i,val){
		if (i < 0 || i > this.length) return false;
		if (i === 0) return this.unshift(val);
		if (i === this.length) return this.push(val);
		let newNode = new Node(val);
		let beforeNode = this.get(i-1);
		let afterNode = beforeNode.next;
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;
		this.length++;
		return true;
	}

	remove(i){
		if (i >= this.length || i < 0) return false;
		if (i === 0) return this.shift();
		if (i === this.length - 1) return this.pop();
		let removed = this.get(i);
		let prevNode = removed.prev;
		let nextNode = removed.next;
		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		removed.next = null;
		removed.prev = null;
		this.length --;
		return removed;
	}

	reverse(){
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let next;
		let prev = null;
		for(let i=0; i<this.length; i++){
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
	}

}


let list = new DoublyLinkedList();
list.push(1000);
list.push(2000);
list.push(4000);

