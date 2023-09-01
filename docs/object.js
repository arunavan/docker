


class Person { 
 constructor(firstname,lastname) {

   this.firstname=firstname ;
    this.lastname=lastname ;
}
   dispdetails()
      {    
          console.log(this.firstname);
         console.log(this.lastname);
   }    
}

var person=new Person("tom","Hannks"); 

var p1=new Person("srikanth","Kumar");

//access the object values 
//console.log(person.firstname)   //accessing outside of class
//console.log(person.lastname) 
person.dispdetails()
p1.dispdetails()
