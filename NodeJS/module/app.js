const logger = require('./logger.js') //logger.js를 import하는 과정

logger("GET '/' 127.0.0.1");
// console.log(module); //module 이 global 객체는 아님. 그래서 global.module 하면 에러남
// console.log(__dirname);
// console.log(__filename);