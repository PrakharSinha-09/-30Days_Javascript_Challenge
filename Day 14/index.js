class Person{
    name;
    age;
    constructor(name, age){
        this.name=name
        this.age=age
    }

    static genericGreeting(){
        console.log("Hello World");
    }

    greet(){
        console.log(`hello ${this.name}`);
    }

    setAge(age){
        this.age=age;
        console.log(`updated age is ${age}`);
    }
}
Person.genericGreeting()
const obj=new Person("prakhar",22)
obj.greet()
obj.setAge(23)
console.log(obj.age);

//Inheritance
class Student extends Person{
    studentId=21200161;

    static noOfStudentsInstance=0;

    constructor(name, age) {
        super(name, age); // Call the parent constructor to initialize `name` and `age`
        Student.noOfStudentsInstance+=1;            //because it is a static proprty, we have to refer it by class name.
    }

    static getTotalStudents(){
        return Student.noOfStudentsInstance
    }

    getStudentId(){
        return this.studentId
    }

    greet(){
        super.greet()
        console.log(`StudentId of ${this.name} is ${this.studentId}`);
    }
}

const stu=new Student("prakhar", 22)
const stu2=new Student("prakhar", 22)
const stu3=new Student("prakhar", 22)
console.log(Student.getTotalStudents());
console.log(stu.getStudentId());
stu.greet()

class Account{
    #balance=0;                    //this is the way, how we create private properties in js, via #

    seeBalance(){
        return this.#balance;
    }

    depositMoney(balance){
        this.#balance+=balance
        console.log("Money Deposited!")
    }

    withdrawMoney(balance){
        this.#balance-=balance
        console.log("Money Withdrawn Successfully!")
    }
}

const obj1=new Account()
console.log(obj1.seeBalance());
obj1.depositMoney(30);
obj1.depositMoney(30);
obj1.withdrawMoney(55);
console.log(obj1.seeBalance());