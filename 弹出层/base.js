// function $(item) {
//   return document.querySelector(item);
// }
// $('body').addEventListener('click', () => {console.log(111)});
// let body = document.querySelector('body');
let btns = document.querySelectorAll('button');
let wrapper = document.querySelector('.jumpWrapper');
let inner = document.querySelector('.jump');

btns.forEach( (item, index) => {
  item.addEventListener('click', () => {
    jumpHandle(index);
  });
});
wrapper.addEventListener('click', () => {

  jumpHandle(2);
});

function jumpHandle (num) {
  // inner.style.width = '500px';
  // inner.style.height = '400px';
  wrapper.classList.remove('jumpIN');
  inner.classList.remove('jumpIN');
  wrapper.classList.remove('jumpOut');
  inner.classList.remove('jumpOut');
  let target = window.event;
  if (num === 0) {
    inner.classList.add('jumpOut');
    wrapper.classList.add('jumpOut');
    wrapper.style.display = 'flex';
    body.style.overflow = 'hidden';
  } else if (num === 1 || num === 2) {
    if (target.target === inner) {
      return;
    }
    wrapper.classList.add('jumpIN');
    inner.classList.add('jumpIN');
    // inner.style.width = 0;
    // inner.style.height = 0;
    let timer = setInterval( () => {
        wrapper.style.display = 'none';
        body.style.overflow = '';
        clearInterval(timer);
    },300)
  }
}