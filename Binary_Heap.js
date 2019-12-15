class MaxBinaryHeap {
	constructor(){
		this.values = [];
	}

	insert(val){
		this.values.push(val);
		this.bubbleUp();
	}

	bubbleUp(){
		let index = this.values.length - 1;
		let element = this.values[index];
		while(index > 0){
			let parentIndex = Math.floor((index-1)/2);
			let parent = this.values[parentIndex];
			if (element <= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}



	print(){
		console.log(this.values);
	}


	extractMax(){
		if (this.values.length) === 0 return undefined;
		let max = this.values[0];
		let end = this.values.pop();
		this.values[0] = end;
		this.sinkDown();	
		return lastItem;
	}


	sinkDown(){
		let parent = this.values[0];
		let leftChild = this.values[2*(0+1)];
		let rightChild = this.values[2*(0+2)];

	}

	
}