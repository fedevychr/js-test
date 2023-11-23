let a = 6;
let b = false;
let c = "12";
let d = 1;
let result = a + d + c + b;
// console.log(result); // 712false

////////////////////////////////

for (let i = 6; i > 3; i--) {}
// console.log(i); // ReferenceError

///////////////////////////////

let firstName = null;
let nickName = "Суперкодер";

// console.log(firstName ?? nickName ?? "Анонім"); // Суперкодер

///////////////////////////////

const fruits = ["Яблуко", "Груша", "Апельсин"];
const shoppingCart = fruits;
shoppingCart.push("Банан");
// console.log(fruits.length); // 4