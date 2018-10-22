
function getFirstSelector(selector) {
     return document.querySelector(selector)
}
function nestedTarget(){
const lis = document
.getElementById('nested')
.querySelector('div.target');
return lis
}
function increaseRankBy(n) {
  var items = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < items.length; i++){
items[i].innerHTML = parseInt(items[i].innerHTML) + n
  }
}
function deepestChild() {
  let node = document
  .getElementById('app')
  .querySelector('div#grand-node div div div div');
  return node
}
