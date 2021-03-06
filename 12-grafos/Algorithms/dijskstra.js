var graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
]

const INF = Number.MAX_SAFE_INTEGER;
const dijkstra = (graph, src) => {
  const dist = [];
  const visited = [];

  const { length } = graph;
  for (let i = 0; i < length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }

  dist[src] = 0;

  for (let i = 0; i < length; i++) {
    const u = minDistance(dist, visited);
    visited[u] = true;

    for (let v = 0; v < length; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 &&
        dist[u] !== INF &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }

  return dist;
}

const minDistance = (dist, visited) => {
  let min = INF;
  let minIndex = 1;
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }

  return minIndex;
}

const dist = dijkstra(graph, 0);

for (let i = 0; i < dist.length; i++){
  console.log(i + '\t\t' + dist[i]);
}