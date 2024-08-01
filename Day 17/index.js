class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

const head=new Node(1)
const second=new Node(2)
const third=new Node(3)
const fouth=new Node(4)

head.next=second
second.next=third
third.next=fouth
fouth.next=null

class LinkedList{
    addNodeToEnd(head,val){
        let temp=head
        while(temp.next!=null){
            temp=temp.next
        }
        let node=new Node(val)
        node.next=null

        temp.next=node
    }

    removeNodeFromEnd(head){
        if(head.next==null){
            head=null
            return
        }
        let pre=null
        let temp=head
        while(temp.next!=null){
            pre=temp
            temp=temp.next;
        }
        pre.next=null
    }

    displayNodes(head){
        let temp=head
        while(temp!=null){
            console.log(temp.value);
            temp=temp.next
        }
    }
}

const obj=new LinkedList()
obj.addNodeToEnd(head,44)
obj.displayNodes(head)
obj.removeNodeFromEnd(head)
obj.displayNodes(head)

//Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); 
console.log(stack.pop());  
console.log(stack.peek()); 
console.log(stack.pop());  
console.log(stack.pop());  
console.log(stack.pop());  

//reversing string using above Stack Class
function reverseString(input) {
    const stack = new Stack();

    for (let char of input) {
        stack.push(char);
    }

    let reversedString = '';
    
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

const originalString = "Hello, World!";
const reversed = reverseString(originalString);

console.log(reversed);

//queue
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); 
console.log(queue.dequeue());
console.log(queue.front()); 
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

//simulating the printer queue
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    // Add a print job to the queue
    addJob(job) {
        console.log(`Adding job: ${job}`);
        this.queue.enqueue(job);
    }

    // Process and print all jobs in the queue
    processJobs() {
        while (!this.queue.isEmpty()) {
            const job = this.queue.dequeue();
            console.log(`Processing job: ${job}`);
            // Simulate the time taken to process the job
            // In a real-world scenario, this might involve more complex operations
        }
        console.log('All jobs processed.');
    }
}

//Binary Tree
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value)
    inOrderTraversal(node.right);
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
