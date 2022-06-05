import { GraphColors, initializeColor } from "../../utils/index.js";

export const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === GraphColors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = GraphColors.GREY;
  if (callback) {
    callback(u);
  }

  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === GraphColors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }

  color[u] = GraphColors.BLACK;
};

export const DFS = (graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  const d = {};
  const f = {};
  const p = {};
  const time = {
    count: 0,
  };

  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === GraphColors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }

  return {
    discovery: d,
    finished: f,
    predecessors: p
  }
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = GraphColors.GREY;
  d[u] = ++time.count;
  const neighbors = adjList.get(u);

  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if(color[w] === GraphColors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }

  color[u] = GraphColors.BLACK;
  f[u] = ++time.count;
}
