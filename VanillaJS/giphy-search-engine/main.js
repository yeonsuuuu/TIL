//1. <input> 태그 안의 값을 잡는다.

const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');//태그 자체를 잡는것
button.addEventListener('click', () => {
  const inputValue = document.querySelector('#js-input').value;//값을 잡는것
  pushToDOM(inputValue);
});

inputArea.addEventListener('keyup',(e) => {
  const inputValue = document.querySelector('#js-input').value;
  if(e.which === 13) pushToDOM(inputValue);//enterkey 눌렀을 때 pushToDOM이 실행됨
});

//2. API를 활용해 data를 받는다. 그리고 가공한다.
const API_KEY = 'bT2Gt243eOCIuB9IEp19q7AHXgNSKo8Y';
let keyword = 'dogs';
const URL = `api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`
console.log(URL);

//3. GIF 파일들을 index.html 에 밀어 넣는다.
const pushToDOM = (data) => {
  const resultArea = document.querySelector('#result-area');
  resultArea.innerHTML = data;
}