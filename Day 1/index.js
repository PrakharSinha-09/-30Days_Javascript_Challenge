var a=1;
console.log(a);
console.log(`data type of a is ${typeof a}`);

let b="hello"
console.log(b);
console.log(`data type of b is ${typeof b}`);

const c=false
console.log(c);
console.log(`data type of c is ${typeof c}`);


let d="prakhar"
d="prabal"
console.log(d);

const m=1;
// m=3                       we cannot reassign when it is decalred using const
console.log(m);


let arr=[1,"hello",false,person={firstName:"John", lastName:"Doe"}]
for(i in arr){
    let value=arr[i];
    if(typeof value==='object') {
        console.log(JSON.stringify(value) + ` and it is type of ${typeof value}`);
    }
    else{
        console.log(value + ` and it is type of ${typeof value}`);
    }
}

