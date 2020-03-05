//1. object declare...
// var student = {id:121, phone:129989, name:"Alif"};
// var student2 = {id:178, phone:2947999, name:"mahia mahi"};
// console.log(student);
// console.log(student2);

//2. (A) only kono property ke output korte( 3 bhabe kora jay, (1. ))...
// var student = {id:121, phone:129989, name:"Alif"};
// var student2 = {id:178, phone:2947999, name:"mahia mahi"};
// var phnNum = student2.phone;
// console.log(phnNum);

//2. (B) only kono property ke output korte( 3 bhabe kora jay, (2. ))...
// var student = {id:121, phone:129989, name:"Alif"};
// var student2 = {id:178, phone:2947999, name:"mahia mahi"};
// var phnNum = student2["phone"];
// console.log(phnNum);

//2. (C) only kono property ke output korte( 3 bhabe kora jay, (3. ))...
// var student = {id:121, phone:129989, name:"Alif"};
// var student2 = {id:178, phone:2947999, name:"mahia mahi"};
// var phoneNumbers = "phone";
// var phnNum = student2[phoneNumbers];
// console.log(phnNum);

//3. (1, 2, 3) object er property value change korte oi ager moto ( 3 bhabe kora jay, (1, 2, 3 ))...
// var student = {id:121, phone:129989, name:"Alif"};
// var student2 = {id:178, phone:2947999, name:"mahia mahi"};
// student2.phone = 2947999771111111;
// student2["phone"] = 222222222222;
// var phnNum = student2["phone"];
// console.log(phnNum);

//4. notun kono property add korte...
var student = {id:121, phone:129989, name:"Alif"};
var student2 = {id:178, phone:2947999, name:"mahia mahi"};

student2.cinema = "Ogni22";
student2["cinema"] = ["Smart girl"];
var phnNum = student2["phone"];
console.log(phnNum);
console.log(student2);

