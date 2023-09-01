let name = Array.from('es6')  
  
console.log(name)  

let marks =Array.of(45,34,65);
console.log(marks)

const num = [1,2,3,4,5,6,7,8,9,10];  
const num1 = [1,2,3,4,5,6,7,8,9,10];  
const num2 = [1,2,3,4,5,6,7,8,9,10];  
console.log(num.copyWithin(1,3,5));  
console.log(num1.copyWithin(1,3)); //omitting the parameter end  
console.log(num2.copyWithin(1));

var arr=[5,22,19,25,34];    
var result=arr.find(x=>x>25);    
console.log(result);  

var colours = ["Red", "Yellow", "Blue", "Black"];  
console.log(colours.join())
var e=colours.values()
console.log(...e)
for(let i of e){
    console.log(i)
}
colours.unshift("orange")
console.log(colours)
var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
var result=arr.slice(1,2);  
console.log(result)

var person = { 
    firstname:"Tom", 
    lastname:"Hanks", 
    
    func:function(){return "Hello!!"},    
 }; 
 //access the object values 
 console.log(person.firstname)   
 console.log(person.lastname) 
 console.log(person.func())