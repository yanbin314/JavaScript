let wrapper = document.querySelector('.wrapper');
let imgList = document.querySelectorAll('li');
let ulList = document.querySelector('.list');
//获取导航 根据图片个数动态创建导航个数
let listNav = document.querySelector('.list_nav');
let navItems = [];
let timer1 = null;
let config = {
  width: 0,
  height: 0,
  left: 0, 
  speed: 3000, //切换图片的延时
  moveSpeed: 40, //图片移动的速度
  index: 0, //当前图片的索引
  num: 0,
  navDisplay: undefined, //导航当前状态
  itemWidth: 15,
  itemHeight: 15,
  navWidth: 0,
  navHeight: 0,
  navLeft: 0,
};
bannerMove();
setNav(0);
// navItems.forEach( (item, index) => {
//   item.addEventListener('click', () => {clickhandle(index)})
// });
function bannerMove () {
  getStyle();
  timer1 = setInterval( () => {
    // console.log(config.index)
    getSpeed();
    config.index ++;
  }, config.speed);
}
function getStyle () {
  config.width = imgList[0].offsetWidth;
  config.height = imgList[0].offsetHeight;
  config.num = imgList.length; //图片个数
  for (let n = 0; n < config.num; n++) {
    navItems.push(document.createElement('span'));
    navItems[n].style.width = config.itemWidth + 'px';
    navItems[n].style.height = config.itemHeight + 'px';
    navItems[n].style.background = 'gray';
    listNav.appendChild(navItems[n]);
  }
  config.navWidth = config.num * config.itemWidth + 30 * config.num;
  config.navHeight = config.itemHeight;
  config.navLeft = (config.width - config.navWidth) / 2;
  listNav.style.height = config.navHeight + 'px';
  listNav.style.width = config.navWidth + 'px';
  listNav.style.left = config.navLeft + 'px';
}

function getSpeed () {
  let timer = setInterval( () =>{
    if (config.index > config.num - 1) {
      config.left = config.left - config.moveSpeed;
    } else {
      config.left = config.left + config.moveSpeed
    }
    switch (config.left) {
      case 0 :
        setNav(0);
        ulList.style.left = 0 + 'px';
        config.index = 0;
        clearInterval(timer);
        break;
      case 800 :
        setNav(1);
        ulList.style.left = - config.left + 'px';
        clearInterval(timer);
        break;
      case 1600 :
        setNav(2);
        ulList.style.left = -  config.left + 'px';
        clearInterval(timer);
        break;
      default: 
        ulList.style.left = - config.left + 'px'
        break;      
    }

  }, 30);
}

function setNav(n) {
  navItems.forEach( (item) => {
    item.style.background = 'gray';
  })
  navItems[n].style.background = '#fff';
}

// function clickhandle (n) {
//   clearInterval(timer1);
//   setNav(n);

// }