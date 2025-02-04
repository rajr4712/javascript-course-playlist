
let x = 5;
console.log(x); // 5


//let: its a block scope variable variable assign with this let let keyword is only accesible inside the scope , outside the scope it will not acesible and throw an error
for(let i = 0; i < 5; i++) {
    console.log(i);
}
//Output 0, 1, 2, 3, 4

for(let i = 0; i < 5; i++) {
  
}
console.log(i); 
// ReferenceError: i is not defined


