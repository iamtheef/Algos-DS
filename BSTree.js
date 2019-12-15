class Node{
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST{
	constructor(){
		this.root = null;
	}

	insert(val){
		var newNode = new Node(val);
	if (!this.root) return this.root = newNode;
		var current = this.root;
		while(true){
			if (current.val === val) return undefined;
			if (val < current.val){
				if(current.left === null){
					current.left = newNode;
					return this;
				}
				current = current.left;
			}else if(val > current.val){
				if(current.right === null){
					current.right = newNode;
					return this;
				}
					current = current.right;
			}
		}
	}

	find(val){
		if (!this.root) return false;
		if (typeof(val) !== "number") return false;
		let found = false;
		let current = this.root;
		while(current && !found){
			if (val < current.val){
				current = current.left;
			}else if (val > current.val){
				current = current.right;
			}else return true;
		}
		return false;
	}

	BFS(){
		let current = this.root;
		let data = [];
		let que = [];
		que.push(current);
		while(que.length){
			current = que.shift();
			data.push(current.val);
			if (current.left) que.push(current.left);
			if (current.right) que.push(current.right);
		}
		return data;
	}


	DFS(){ /* pre order*/
		let nodes = [];
		visit(this.root);
		return nodes;

		function visit(node){
			nodes.push(node.val);
			if (node.left) visit(node.left);
			if (node.right) visit(node.right);
		}
	}

	DFS2(){ /* post order*/
		let nodes = [];
		function visit(node){
			if (node.right) visit(node.right);
			if (node.left) visit(node.left);
			nodes.push(node.val);
		}
		visit(this.root);
		return nodes;
	}

	DFS3(){ /* in order (it also return the tree sorted*/
		let nodes = [];
		function visit(node){
			if (node.right) visit(node.right);
			nodes.push(node.val);
			if (node.left) visit(node.left);
		}
		visit(this.root);
		return nodes;
	}

	reconstruct(arr) /*post order*/ {
		arr.reverse();
		arr.forEach(o => this.insert(o));
		return this;
	}



}

let tree = new BST;
tree.reconstruct([2, 4, 3, 8, 7, 5]);
// tree.insert(5);
// tree.insert(7);
// tree.insert(8);
// tree.insert(3);
// tree.insert(4);
// tree.insert(2);

	