let wrapper = document.querySelector('.wrapper');
let imgList = document.querySelectorAll('li');
let ulList = document.querySelector('.list');
let config = {
  width: undefined,
  height: undefined,
  left: 0,
  speed: 2000,
  moveSpeed: 90,
};
bannerMove();

function bannerMove () {
  getStyle();
  getSpeed();
}
// console.log(imgList)

function getStyle () {
  config.width = imgList[0].offsetWidth;
  config.height = imgList[0].offsetHeight;
}
setInterval (() => {
  getSpeed();
}, 5000);
function getSpeed () {
  setInterval (() =>{ 
    config.left = config.left + config.moveSpeed;
    if (config.left > 1600) {
      config.left = 0;
    }
    ulList.style.left = - config.left + 'px'
    console.log(config.left)
  }, 150);
}