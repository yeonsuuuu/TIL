/*ES5 for() */

var colors = ['red', 'blue', 'green'];

for (var i =0; i < colors.length; i++){
  console.log(colors[i]);
}

/* ES6 forEach() */
colors.forEach(function(color){
  console.log(color);
})

var numbers = [1,2,3,4,5];
var sum = 0;
function add (number){
  sum += number;
}
numbers.forEach(add);

console.log(sum);