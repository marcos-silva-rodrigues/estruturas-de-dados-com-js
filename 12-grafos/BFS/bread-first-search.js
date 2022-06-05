import Queue from "../../05-filas/Queue/queue.js";
import { GraphColors, initializeColor } from "../../utils/index.js";

export const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();

  const color = initializeColor(vertices);
  const queue = new Queue();
  queue.enqueue(startVertex);
  
  while(!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = GraphColors.GREY;

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === GraphColors.WHITE) {
        color[w] = GraphColors.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = GraphColors.BLACK;
    if (callback) {
      callback(u);
    }
  }
}

export const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  const distances = {};
  const predecessors = {};

  queue.enqueue(startVertex);

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neightbors = adjList.get(u);
    color[u] = GraphColors.GREY;

    for (let i = 0; i < neightbors.length; i++) {
      const w = neightbors[i];

      if (color[w] === GraphColors.WHITE) {
        color[w] = GraphColors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = GraphColors.BLACK;
  }

  return {
    distances,
    predecessors
  }
}