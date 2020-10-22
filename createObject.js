//simple function 
function vehicle(name,maker,engine){ 
	this.name = name; 
	this.maker = maker; 
	this.engine = engine; 
} 
//new keyword to create an object 
let car = new vehicle('GT','BMW','1998cc'); 
//property accessors 
console.log(" new keyword to create an object ");
console.log(car.name); 
console.log(car.maker); 
console.log(car['engine']); 

// Create object with object literal

let car1 = {
    name1: "GT",
    marker1 : "BMW",
    engine1 : "1888cc"
};
car1.color =  "Red"; // Add new property color

// Property accessors
console.log("Create an object with object literal");
console.log(car1.name1); // access using dot opearator(.) notation 
console.log(car1['engine1']); // access using bracket [] notation
console.log(car1)

// Create object using Object.create method

const info = {
            college : " ",
            printinfo : function(){
                console.log(`My name is ${this.name} . I am from ${this.place}. I am studing ${this.college}`);
            }
};
const obj  = Object.create(info);
obj.name = "Ravindra kumar kushwaha";
obj.college = "IET-DAVV";
obj.place = "Chhatarpur";
console.log("Create object using Object.create method");
obj.printinfo();

// Create object using es6 classes
class Employee{
    constructor(name,email,age){
        this.name = name;
        this.email = email;
        this.age = age;
        
    }
}
let obj1 = new Employee("Ravindra","ravindrakushwahanwg@gmail.com",21);
console.log("Create object using es6 classes");
console.log(obj1.name);
console.log(obj1);