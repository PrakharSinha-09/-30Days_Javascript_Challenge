let arr=[1,2,3,4,5]
console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length-1]);

arr.push(10)
console.log(arr);

arr.pop()
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(14)
console.log(arr);


//map, filter & reduce
let newArr=arr.map((num)=>{
    return num*num
})
console.log(newArr);

let newArr1=arr.filter((num=> num % 2==0))
console.log(newArr1);

let sum=arr.reduce((accumulator, num)=> accumulator + num, 0)
console.log(sum);

//iteration
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach((num)=>{
    console.log(num);
})


//2d array
let arr2D=[[1,2,3],[3,4,5],[5,6,7]]
for(let i=0;i<arr2D.length;i++){
    for(let j=0;j<arr2D[i].length;j++){
        process.stdout.write(arr2D[i][j]+ " ");
    }
    console.log();
}

//accesing specific element from 2D array
console.log(arr2D[0][1]);