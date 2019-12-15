class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class q{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val){
		let newNode = new Node(val)
		if (!this.first){

			this.first = newNode;
			this.last = newNode;
		}else{
			let oldLast = this.last;
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	pop(){
		if(!this.first) return null;
		if (this.size === 1){
			this.first = null;
			this.last = null;
		}else{
			let removed = this.first;
			this.first = this.first.next;
			removed = null;
		}
		return --this.size;
	}
}