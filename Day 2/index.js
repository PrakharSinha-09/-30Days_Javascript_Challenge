let a=5;
let b=4;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

a+=5;
console.log(a);

b-=2;
console.log(b);

if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("b is greater than a");
}

let a="5";
let b=5;
if(a==b){
    console.log("equal with different types");
}
if(a===b){
    console.log("equal");
}

if(a && b){
    console.log("both a and b holds some value");
}

b=""
if(a || b){
    console.log("both a and b holds some value");
}


b=9

//Ternary Operator
let greaterNumber= a>b ? a: b
console.log(`greater number is ${greaterNumber}`);