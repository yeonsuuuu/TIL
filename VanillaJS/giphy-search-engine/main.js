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
let keyword = 'monsta-x';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`

  //Ajax request
const GiphyAJAXCall = new XMLHttpRequest(); 
GiphyAJAXCall.open('GET', URL)//URL 내놔라
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', (e) => {
  const rawData = e.target.response;
  const parsedData = JSON.parse(rawData);
  pushToDOM(parsedData);
});

//3. GIF 파일들을 index.html 에 밀어 넣는다.
const pushToDOM = (parsedData) => {
  const resultArea = document.querySelector('#result-area');
  const DataSet = parsedData.data;
  console.log(DataSet);
  DataSet.forEach((imageData) => {
    let imageURL = imageData.images.fixed_height.url;
    let alt = imageData.title;
    resultArea.innerHTML += `<img src=${imageURL} alt='${alt}'/>`;
  })

  
  //const imageURL = parsedData.data[10].images.fixed_height.url;
  
};