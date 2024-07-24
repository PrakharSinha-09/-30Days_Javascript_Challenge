function eligibleToDrive(n){
    if(n<18){
        throw ("Age is less than 18")
    }else{
        console.log("cool, you are eligible to drive!");
    }
}

try {
    eligibleToDrive(17)
} catch (error) {
    console.log(error);
}

function divide(a,b){
    if(b==0){
        throw "denominator can't be zero"
    }
    else{
        console.log(a/b);
    }
}

try {
    divide(3,5)
} catch (error) {
    console.log(error);
}
finally{
    console.log("this will always run! no matter what");
}

//custom error class
function CheckCondition(msg = "") { 
	this.msg = msg; 
	this.name = "CheckCondition"; 
} 
CheckCondition.prototype = Error.prototype; 

try { 
	if (10 != 20) 
		throw new CheckCondition("10 is not equal to 20"); 
} 
catch (err) { 
	console.error(err); 
}
