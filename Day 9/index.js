let p1=document.getElementById('p1')
p1.textContent="how are you ?"
let c1=document.getElementsByClassName('c1')
console.log(c1[0].document);

c1[0].style.backgroundColor="red"

let div=document.createElement("div")
div.textContent="hello Prakhar"
document.body.appendChild(div)

let node=document.createElement("li")
const textnode = document.createTextNode("HULK");
console.log(textnode);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

//removing element from DOM
let list=document.getElementById("myList")
list.removeChild(list.lastElementChild)

//event listener
let button=document.getElementsByClassName("btn")
button[0].addEventListener('click',()=>{
    p1.textContent="I got changed!"
})

button[0].addEventListener('mouseover',()=>{
    button[0].style.borderColor="red"
})
