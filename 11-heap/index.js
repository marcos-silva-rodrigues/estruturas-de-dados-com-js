import { MaxHeap, MinHeap } from "./heap.js";

const heap = new MinHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log(heap.size());
console.log(heap.isEmpty());
console.log(heap.findMinimum());

const heap2 = new MinHeap();

for (let i = 0; i < 10; i++) {
  heap2.insert(i);  
}

console.log(heap.extract());


const heapMax = new MaxHeap();

heapMax.insert(2);
heapMax.insert(3);
heapMax.insert(4);
heapMax.insert(5);
heapMax.insert(1);

console.log(heapMax.size());
console.log(heapMax.isEmpty());
console.log(heapMax.findMinimum());