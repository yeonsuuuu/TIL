/* ES6 for() */
var numbers = [10,20,30];
var sum =0;

for (var i=0;i<numbers.length;i++){
  sum += numbers[i];
}


var result = numbers.reduce(function(acc,number){
  return acc += number;
}, 0);

/* ES6 reduce */
numbers.reduce(function(acc,number){
  return acc += number; //acc = sum 
}, 0 ); //0으로 초기화

/* map VS reduce */
var myColors = [
  {color: ' black'},
  {color: 'red'},
  {color: 'gold'}
];

//var onlyColors = ['black','red','gold'];
var onlyColors = myColors.map(function(c){
  return c.color;
});

var oColors =  myColors.reduce(function(acc,c){
  acc.push(c.color);
  return acc;
},[]);

/* 실제로는? */

// 올바르게 닫힌 괄호 () , )()일 경우?
function isGoodParens(string) {
  //1. string을 배열로 바꾼다
  var array = string.split('');
  //2. 배열의 값을 비교한다.
  array.reduce(function(acc,char){
    //3.첫 문자는 (로 시작해야 함
    if(char[0] === '('){
      
    }
  },{'(':0,')':1});
};

isGoodParens('((((()))))') //true
isGoodParens(')((())))(()') //false
isGoodParens('(()))') //false



/* 실습 1 */
var trips = [
  { distance:34},
  { distance:10},
  { distance:100}
];

var totalDistance = trips.reduce(function(acc, trip){
  return acc += trip.distance;
}, 0);

/* 실습 2 */
var desks = [
  {type:'sitting'},
  {type:'standing'},
  {type:'sitting'},
  {type:'sitting'},
  {type:'standing'}
];

var deskTypes = desks.reduce(function(acc,desk){
  if (desk.type === 'sitting'){
    acc.sitting++;
  } else {
    acc.standing++;
  }
},{sitting:0,standing:0});

console.log(deskTypes);

/* 실습 3 */
function unique(array){
  array.reduce(function(acc, element){
    
  }, []);
}

var numbers = [4, 1, 3, 2, 2, 1, 3 ,3, 4, 4, 4];
unique(numbers); //[1,2,3,4]