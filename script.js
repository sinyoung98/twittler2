// your code here

// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)
// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());
creatDatatweets();
document.querySelector('#btn-tweet').onclick = creatNewTweet;
document.querySelector('.btn-check').onclick = creatRandomtweet;

let elements = [];
elements.push(document.querySelectorAll('.name'));

for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = filterTweet;
} 
/*
elements.filter(filterTweet)
//필터를　사용해서　

function isBigEnough(value) {
  return value >= 10;
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // [12, 130, 44]
*/
