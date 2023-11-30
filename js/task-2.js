function countProps(object) {

//   const keys = Object.keys(object);
  
    for (const key of Object.keys(object)) {

    } 
  return Object.keys(object).length;
}


console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({}));