let a=4
if(a>0){
    console.log("Number is +ve");
}
else if(a<0){
    console.log("Number is -ve");
}
else{
    console.log("Number is zero");
}

//to vote he must be >=18
let age=10;
if(a>=18){
    console.log("Eligible to Vote");
}
else{
    console.log("Not eligible");
}

//Nesd if-else to find largest of three numbers
let n1=3;
let n2=8;
let n3=5;

if(n1 >= n2) {
    if(n1 >= n3)
        console.log(n1 + " is the largest number.");
    else
        console.log(n3 + " is the largest number.");
} else {
    if(n2 >= n3)
        console.log(n2 + " is the largest number.");
    else
        console.log(n3 + " is the largest number.");
}


//switch case
let choice=1
switch (choice){
    case 1: console.log("Monday");break
    case 2: console.log("Tueday");break
    case 3: console.log("Wednesday");break
    case 4: console.log("Thursday");break
    case 5: console.log("Friday");break
    case 6: console.log("Saturday");break
    case 7: console.log("Sunday");break

    default: console.log("Invalid");
}

let num=6;
let isEven=num%2==0 ? 'number is even' : 'number is odd'
console.log(isEven);

//leap year
let year=2004
if ((year % 4==0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}