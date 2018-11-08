/* Rest 나머지 */
const addNumbers = (a, b, c, d, e) => {
  const numbers = [a, b, c, d, e ];
  return numbers.reduce((acc, number)=> {
    return sum += number;
  }, 0)
};

addNumbers(1,2,3,4,6,7)

const addAll = (...numbers) => {
  return numbers.reduce((acc, number)=> {
    return sum += number;
  }, 0)
}

addAll(1,2,4,43,542,46,546,245,547,45,87,3413,356,68)

/* Speread 펼치다 */
let defaultColors = ['red', 'green', 'navy'];
let myColors = ['black', 'white', 'green', 'puple'];
let iphoneColors = ['rose hold', 'space gray'];

let palette = defaultColors.concat(myColors);
palette = ['brown', 'gray', ...defaultColors, ...myColors, ...iphoneColors];

/* 실습 */
const showShoppingList = (...items) => {
  if(items.indexOf('milk' < 0)){
    return ['milk', ...items]
  }
}

/* 실제 개발에서는? */
let MathLibrary = {
  caculateProduct(a, b) {
    return a * b
  }
}

let MathLibrary = {
  multiply(a, b) {
    return a * b;
  },
  
  caculateProduct(...args) { //rest
    console.log('Please use method "multiply" instead :)');
    return this.multyply(...args) //speread
  }
}

MathLibrary.caculateProduct(10, 10)

/* 실습 */
const join = (array1, array2) => {
  return array1.concat(array2);
}

const join = (array1, array2) => {
  return [...array1, ...array2];
}

const unshift = (array, a, b, c, d, e) => {
  return [a,b,c,d,e].concat(array);
}

const unshift = (array, ...args) => {
  return [...args, ...array];
}