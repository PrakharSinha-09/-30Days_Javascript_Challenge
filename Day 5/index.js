function evenOrOdd(n)
{
    if(n%2==0){
        console.log(`${n} is even no.`);
    }
    else{
        console.log(`${n} is odd no.`);
    }
}
evenOrOdd(2)

function squareNum(n)
{
    return n*n;
}
console.log(squareNum(3));

//function expression
let max=function(num1,num2){
    let ans=Math.max(num1,num2)
    return ans
}
console.log(max(3,2))

let strConcat=function(str1,str2){
    let ans=str1+str2
    return ans
}
console.log(strConcat("hello","world"))

let sum=(num1,num2)=>{
    return num1+num2
}
console.log(sum(3,9));

let specificCharCheck=(str1,char)=>{
    if(str1.includes(char))
    {
        return true
    }
    return false
}
console.log(specificCharCheck("hello",'f'));

//function with default parameters
function multiply(a,b=4){
    return a*b
}
console.log(multiply(3));

function greet(name,age=14){
    return `hello ${name}, you are ${age} yrs old`
}
console.log(greet("prakhar",21));


//higher order functions
function HOF(fun,n){
    let i=0;
    while(i!=n){
        fun()
        i++;
    }
}
function sayHello(){
    console.log("Hello Buddy!");
}

HOF(sayHello,4)

function calculate(add,mul,val)
{
    let result1=add(val)
    let ans=mul(result1)
    console.log(ans);
}

function add(n){
    return n+1
}

function square(n){
    return n*n
}

calculate(add,square,2)