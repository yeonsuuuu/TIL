/* ES5 */
var name = '이연수';
var title= 'developer';
var workHour = '9 am to 6 pm';

name = '하하하';
title = 'Senior';

function count (targetString) {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = targetString.split('').reduce(function(acc, char){
    if(characters.includes(char)){
      acc++
    }
    return acc;
  },0);

  return number;
}

/* ES6 */
const name = '이연수';
let title = 'developer';
let workHour = '2pm to 6pm';