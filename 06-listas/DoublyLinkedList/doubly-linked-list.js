import { DoublyNode } from "../../models/linked-list-models.js";
import { defaultEquals } from "../../utils/index.js";
import LinkedList from "../LinkedList/linked-list.js";

export default class DoublyLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element) {
    const node = DoublyNode(element);

    if(this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {

      const node = new DoublyNode(element);
      let current = this.head;

      if(index === 0) {
        if(this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node
        }
      } else if (index === this.count){
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }

      this.count++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if(this.count === 1){
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index == this.count - 1 ) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  // indexOf(element) {
  //   return super.indexOf(element);
  // }

  // getHead() {
  //   return super.getHead();
  // }

  getTail() {
    return this.tail;
  }

  clear() {
   super.clear();
   this.tail = undefined;
  }

  inverseToString() {
    if(this.tail == nul) {
      return '';
    }

    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;

    while (previous != null) {
      objString = `${objString}, ${previous.element}`;
      previous = previous.prev;
    }

    return objString;
  }
} 