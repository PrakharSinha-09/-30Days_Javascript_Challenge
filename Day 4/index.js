let i=1
for(i=1;i<=10;i++)
{
    console.log(i);
}

//multiplication of 5
i=1
for(i=1;i<=10;i++)
{
    console.log(`5 x ${i}`+ "="+  i * 5);
}

//sum
let sum=0
i=0;
while(i<=10)
{
    sum+=i
    i++
}
console.log(sum);

i=10
while(i>=1)
{
    console.log(i);
    i--
}

//do while
i=1
do {
    console.log(i);
    i++
} while (i<=5);


//factorial
let fact=1
n=5           //lets say we have to calculate the factorial of n
i=1
do {
    fact=fact*i;
    i++
    
} while (i<=n);
console.log(fact);

//pattern
/*
*
* *
* * *
* * * *
* * * * *
*/

i=1
j=1
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
        process.stdout.write("* ");            //won't work with console.log because it appends a new line automatically, so using process.stdout.write
    }
    console.log();
}


//continue & break
for(i=1;i<=10;i++)
{
    if(i==5) continue;
    console.log(i);
}

for(i=1;i<=10;i++)
{
    if(i==7) break;
    console.log(i);
}