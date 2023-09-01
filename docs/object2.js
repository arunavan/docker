var roles = { 
   type: "Admin", 
   dcode:10,
   displayType : function() {  
    
      console.log(this.type); 
   } ,
   showdata : function() {
     console.log("objects demo..");
   }
}  

roles.displayType();
roles.showdata();


var SD_role = Object.create(roles); 
SD_role.type="SD"
SD_role.displayType(); // Output:Admin 
SD_role.showdata(); 

// Create new role type called Guest 
var guest_role = Object.create(roles); 
guest_role.type = "Guest"; 
guest_role.displayType(); // Output:Guest
guest_role.showdata();

var guest_role1=guest_role;

console.log(guest_role==guest_role1)
var x=89

console.log(Number.isNaN(roles.dcode));
console.log((roles.type).toUpperCase());