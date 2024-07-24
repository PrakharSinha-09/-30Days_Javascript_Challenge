let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("took 2s to reject!")
    },2000)
})

promise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})

//async await
async function hello(){
    try {
        let result=await promise
        console.log(result);
    } catch (error) {   
        console.log(error);
    }
}
hello()

//fetching API
async function getUserInfo(){
    let info=await fetch("https://api.github.com/users/PrakharSinha-09")
    let result=await info.json();

    console.log(result);

}
getUserInfo()

//promise.all
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("took 2s to resolve!")
    },2000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("took 2s to resolve!")
    },2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("took 5s to resolve!")
    },5000)
})

Promise.all([p1,p2,p3]).then((values)=>{
    console.log(values);
})
Promise.race([p1,p2,p3]).then((values)=>{
    console.log(values);
})