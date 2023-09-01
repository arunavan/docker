var add=function(a,b){
    var c=a+b;
    return c;
}

var s=add(3,4);
console.log(s)
hello()

function hello(){
    console.log("hello");
}
const s1=(a,...b)=>a+b;
console.log(s1(5,6,8,9,6))
const disp=()=>console.log("welcome")
disp()
function* gen()  
{  
yield 100;  
yield;  
yield 200;  
}  
// Calling the Generator Function  
var mygen = gen();  
console.log(mygen.next().value);  
console.log(mygen.next().value);  
console.log(mygen.next().value);  
console.log(mygen.next().value); 

function* myGen()  {  
    yield 'First yield statement';  
    yield 'Second yield statement';  
    return 'Return statement';  
    yield 'Second yield statement';  
    }  
    let genobj = myGen();  
      
    console.log(genobj.next());    //returns {value: 'First yield statement', done: false}  
      
    console.log(genobj.next());   //returns {value: 'Second yield statement', done: false}  
      
    console.log(genobj.next());  //returns {value: 'Return statement', done: true}  
      
    console.log(genobj.next()); //returns {value: undefined, done: true}  


    function* g1() {
        yield 'react'
      yield 'angular'
      yield
    }
    let ob=g1()
    for(let x of ob)
    console.log(x)
    (function()  
 {  
 console.log("Hello World");   
})();  