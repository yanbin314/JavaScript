let navItems = document.querySelectorAll('.nav a');
let items = document.querySelectorAll('.item');
let textArea = document.querySelector('.text');
let texts = [];
texts[0] = '123456';
texts[1] = '789789';
texts[2] = '654321';
let index = 1;
let timer = null;

autoMove();

navItems.forEach( (item, i) => {
  item.addEventListener('click', () => {
      clearInterval(timer);
      index = i;
      move(index);
      if (index >= 2) {
        index = 0;
      } else {
        index++;
      }
      autoMove();
  });
});

function autoMove () {
  timer = setInterval( () => {
    move(index);
    if (index === 2) {
      index = 0;
    } else {
      index ++;
    }
  }, 2000);
}
function move (i) {
  items.forEach( (item) => {
    item.style.display = 'none';
    item.style.opacity = 0;
    // item.classList.remove('itemOpacity');
  })
  // console.log(i)
  // items[i].classList.add('itemOpacity');
  items[i].style.display = 'block';
  setOpacity(i);
  textArea.innerHTML = texts[i];
  setNav(i);
}
function setNav (n) {
  navItems.forEach( (item) => {
    item.classList.remove('a_active');
  });
  navItems[n].classList.add('a_active');
}
let qq = 0.15;
function setOpacity (n) {
  let tmp = qq;
  let timeId = setInterval( () => {
    if (tmp >= 1) {
      items[n].style.opacity = 1;
      clearInterval(timeId);
    } else {
      items[n].style.opacity = tmp;
    }
    // console.log(test.style.opacity);
    tmp += tmp;

  }, 100);
}
