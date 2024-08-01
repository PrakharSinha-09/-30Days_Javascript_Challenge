function factorial(n){
    if(n<=1){
        return n
    }
    return n* factorial(n-1)
}
console.log(factorial(5));

function fibo(n){
    if(n<=1){
        return 1;
    }
    return fibo(n-1)+fibo(n-2)
}

let sum=0
function sumOfArr(arr,i){
    if(i >= arr.length){
        return sum
    }
    return sum+arr[i]+sumOfArr(arr,i+1);
}
console.log(sumOfArr([1,2,3,4,5],0));

//max element in an array
let max=0
function maxInArr(arr,i){
    if(i >= arr.length){
        return max
    }
    max=Math.max(max,arr[i])
    return maxInArr(arr,i+1)
}
console.log(maxInArr([1,2,6,4,5],0));

//reverse string
let ans=""
function reverseStr(str,i){
    if(i >= str.length){
        return ans
    }
    reverseStr(str,i+1)
    return ans+=str.charAt(i)
}
console.log(reverseStr("abc",0));

//binary search
function binarySearch(arr, target, left, right) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const index = binarySearch(numbers, target, 0, numbers.length - 1);

console.log(index);

//inorder traveral
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

inOrderTraversal(root); 

//depth of the binary tree
function maxDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root));
