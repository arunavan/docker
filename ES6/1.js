let colors = ['Red', 'Yellow'];  
let newColors = [...colors, 'Violet', 'Orange', 'Green'];  
console.log(newColors);  
let a=[1,2,3];
console.log(a);
var b=new Array(2,3,5);
b.push(6)
console.log(b);
let c=[...a,...b];
console.log(c);
var [x,y,z]=a;

function  funsum(...p) {
    let s=0;
    for(let i of p){
        s+=i;
    }
   console.log(s);
}
//let p=[6,7,8];
funsum(9,8,7)

function show(...args) {  
    let sum = 0;  
    for (let i of args) {  
        sum += i;  
    }  
    console.log("Sum = "+sum);  
  }  
    
  show(10, 20, 30);  


//node 1.js