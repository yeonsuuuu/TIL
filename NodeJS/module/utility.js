console.log("1번만 출력됩니당!");

module.exports = function(numbersToSum=[]){ //.값이 들어오면 배열에 넣고 값이 없으면 초기화 하겠다.
  let sum = 0;
  numbersToSum.forEach(number => sum += number);
  return sum;
}; //전체가 ruturn 값이 됨 

console.log('진짜루여');