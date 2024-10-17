const person={
    name:"Alice",
    age:30,
    city:"New York"
    
}
delete person.city;
person.country="USA";
person.age=31;

console.log(person);


const smartphone={
    brand:"Samsung",
    model:"galaxy S21",
    price:8000
};
delete smartphone.model;

const book={
    title:"Learn javascript",
    author:"john Smith",
    pages:400
};
book.generation="programming"

var arr=[10,20,["apple","banana"],["cat",["dog","elephant"],"fish"],"grape"]
console.log(arr[3][2]);

var arr=[["pen","pencil"],"notebook",[1,2,[3,4,["eraser"]]],"market"]
console.log(arr[2][2][2][0])
// //reserach topic//
// //in js automatic type conersion is known as type coercion this occurs in js implicitly converts one data type to another,this conversion can happen in verious situations,such as during mathematical operations,string concatenation,when coparing two value//
// var num= 5;
// var str= "10";
// result=num+str;

// console.log(result)

// //dynamic typing in js refers to the ability to the language to determine the type of a variable at runtime rather than at compile time//

// data= 100;
// console.log(typeOf data);
// data="string"

// console.log(typeOf data)
