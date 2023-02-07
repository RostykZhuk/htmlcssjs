// Структура даних де елементи зберігаються лінійно. Кожен елемент який зберігає свої дані він має ще силку на наступний. Черга в магазині
// Head - first element in linked list. Tail - last element->null

// Linked list node
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString() {
    return `${this.value}`;
  }
}
// Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //   append method which add the value to the end of array
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }
  // prepend add the value to the start of array
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  // find method finds the particular value in the array
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  // delete method
  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.tail?.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }

  // insertAfter
  insertAfter(value, prevNode) {
    if (prevNode === null) {
      return this;
    }
    const newNode = new LinkedListNode(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }
    return this;
  }
  //   converting linked list to array
  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
  //   converting array to string
  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
}

const list = new LinkedList();

list.append('the').append('best').prepend('am').prepend('I');
list.delete('the');
console.log(list.toString());
