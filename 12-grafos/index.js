import { breadthFirstSearch, BFS } from "./BFS/bread-first-search.js";
import Stack from '../04-pilhas/stack.js'
import Graph from "./graph.js";
import { depthFirstSearch, DFS } from "./DFS/depth-first-search.js";

const graph = new Graph();

const myVertices = ['A','B','C','D','E','F','G','H','I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// console.log(graph.toString());

const printVertex = (value) => console.log('Visited vertex: ' + value);

// BFS
// breadthFirstSearch(graph, myVertices[0], printVertex);

// const shortestPathA = BFS(graph, myVertices[0]);
// console.log(shortestPathA);

// const fromVertex = myVertices[0];

// for (let i = 1; i < myVertices.length; i++) {
//   const toVertex = myVertices[i];
//   const path = new Stack();
//   for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
//     path.push(v);
//   }
//   path.push(fromVertex);
//   let s = path.pop();
//   while (!path.isEmpty()) {
//     s += ' - ' + path.pop();
//   }
//   console.log(s);
// }


 // DFS
// depthFirstSearch(graph, printVertex);

const graph2 = new Graph(true);

const myVertices2 = ['A','B','C','D','E','F'];

for (let i = 0; i < myVertices2.length; i++) {
  graph2.addVertex(myVertices2[i]);
}

graph2.addEdge('A', 'C');
graph2.addEdge('A', 'D');
graph2.addEdge('B', 'D');
graph2.addEdge('B', 'E');
graph2.addEdge('C', 'F');
graph2.addEdge('F', 'E');

const result = DFS(graph2);

const fTimes = result.finished;
let s = '';

for (let count = 0; count < myVertices2.length; count++) {
  let max = 0;
  let maxName = 0;

  for (let i = 0; i < myVertices2.length; i++) {
    if(fTimes[myVertices2[i]] > max) {
      max = fTimes[myVertices2[i]];
      maxName = myVertices2[i]
    }
  }

  s+= ' - ' + maxName;
  delete fTimes[maxName];
}

console.log(s);
