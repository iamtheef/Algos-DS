class Graph {
	constructor(){
		this.adjacencyList = {};
	}


	addVertex(vertex){
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2){
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2){
		this.adjacencyList[vertex1] = 
			this.adjacencyList[vertex1].filter(v => v !== vertex2);
		this.adjacencyList[vertex2] = 
			this.adjacencyList[vertex2].filter(v => v !== vertex1);

	}

	removeVertex(vertex){
		let v = this.adjacencyList[vertex];
		v.forEach((edge)=> this.removeEdge(vertex, edge));
		delete this.adjacencyList[vertex]; 
	}

	DFS(node) /* recursive */{	
		let res = [];
		let visited = {};
		const adjacencyList = this.adjacencyList; 
		visited[node] = true;
		(function DFShelper(vertex){
		if (!vertex) return null;
		res.push(vertex);
		visited[vertex] = true;
		adjacencyList[vertex].forEach(neighbor => {
			if (!visited[neighbor]){
				return DFShelper(neighbor);
			}
		})
		})(node);	
		return res;
	}

	DFS2(vertex) /* iterative */{
		const stack = [vertex];
		const res = [];
		const visited = {};
		let currentVertex;

		visited[vertex] = true;
		while(stack.length){
			currentVertex = stack.pop();
			res.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbor => {
				if (!visited[neighbor]){
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return res;
	}

	BFS(iniVertex){
		let q = [iniVertex];
		let result = [];
		let visited = {};
		let currentVertex;
		visited[iniVertex] = true;
		while(q.length){
			currentVertex = q.shift();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach((vertex)=> {
				if (!visited[vertex]){
					visited[vertex] = true;
					q.push(vertex);
				}
			});
		}
		return result;
	}

	breadth(){
		let results = [];
		Object.entries(this.adjacencyList).forEach((vertex) =>{
			results.push(vertex[0]);
		});
		return results;
	}


	
	isMinimal(){
		let minimal = false;
		Object.values(this.adjacencyList).forEach(vertex =>{
			if(vertex.length < 2){
				minimal = true;
			}
		});
		return minimal;
	}

}


let g = new Graph;
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
