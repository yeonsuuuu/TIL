/* ES5 for() */
var products = [
  { name: 'banana', type: 'fruit'},
  { name: 'carrot', type: 'vegetable'},
  { name: 'apple', type: 'fruit'},
  { name: 'eggplant', type: 'vegetable'},
  { name: 'tomato', type: 'fruit'},
];

var fruits = [];
for (var i = 0; i < products.length; i++) {
  if(products[i].type === 'fruit'){
    fruits.push(products[i]);
  }
}

/* ES6 filter */
var vegetables = products.filter(function(){
  return products.type === 'vegetable'
})

/* 실습 1 */
var numbers = [1,2,3,56,57,688,789,21,5]
var bigNumbers = numbers.filter(function(number){
  return number > 50
}) //50 초과

/* 실습 2 */
var users = [
  { id: 1, admin: true},
  { id: 2, admin: false},
  { id: 3, admin: true},
  { id: 4, admin: true},
  { id: 5, admin: false}
]
var admins = users.filter(user => user.admin);
 //admin 인 친구들만

 var admins = users.filter(function(user){
   return user.admin;
 })
/* 실습 3 */
var numbers = [10, 20, 30];

function reject(array, iterFunction){

}

var lessThan15 = reject(numbers, function(number){
  return number > 15;
})