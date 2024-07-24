let str1="Prakhar"
let age=22
console.log(`hey ${str1}, you are ${age} yrs old`);

let knowMe = `My Name is Prakhar Sinha
- A Passionate Software Dev from India.
`

console.log(knowMe);

//Destructuring
let arr=[1,2,3]
const [a,b]=arr
console.log(a, b);

let bookObj={
    title:"Cracking the Coding Interview",
    author:"Gayle Laakmann McDowell"
}

let {title,author}=bookObj
console.log(title, author);


//Spread & Rest Operators
let arr1=[1,2,3,4]
let arr2=[9,8,...arr1]
console.log(arr2);

function sum(...nums){
    let sum=nums.reduce((accumulator, num)=> accumulator + num, 0)
    console.log(sum);
}

sum(1,2,...arr1)

//object litera enhancements
var name = "Duke"; 
var color = "Brown"; 
  
// Using Object Literal Enhancement 
// Combines all variables into a dog object 
var dog = {name, color}; 
console.log(dog); 

console.log(dog.name);