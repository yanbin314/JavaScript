let Body = document.querySelector('body');
let btn = document.querySelector('.btn');
let objs = [];


let creatNotice = function (obj) {
  console.table(obj);
  let num = obj.length - 1;
  setPosition(num, obj);
};
//设置位置
let setPosition = function (num, obj) {
  let Div = document.createElement('div');
  Div.innerHTML = obj[num].content;
  Div.style.top = obj[num].top + 'px';
  Div.style.height = obj[num].height + 'px';
  Div.className = 'notice';
  Body.appendChild(Div);
  setTimeout(function () {
    removeNotice(obj, Div);
  }, 2000);
  console.table(obj);
};
// let removeNotice = function (obj, startIndex, div) {
//   setTimeout(function () {
//     div.style.display = obj[startIndex].display;
//     obj.splice(startIndex, 1);
//   },500);
// }
//计算到顶部的距离
let ToTop =  function () {

}
//添加到数组中
let initial = function (obj) {
  objs.push(obj);
  obj.index = objs.indexOf(obj);
  obj.top = obj.top * (obj.index + 1) + obj.height * (obj.index);
  creatNotice.call(this, objs);
};
{
  console.table(objs);
  btn.addEventListener('click', () => {
    initial({
      content: '测试测试',
      top: '40',
      marginBtm: '20',
      height: '60',
      index: null,
      display: 'none',
    });
  });
}
//删除
  var i = 0;
  var removeNotice = function (obj,div) {
 
      Body.removeChild(div);
      // div.style.display = obj[0].display;
      obj.splice(0, 1);
      // console.table(obj);
      let length = obj.length;
      // setInterval( function () {
      //   for (i = 0; i < length; i++) {
      //     console.log(i)
      //     console.log(document.getElementsByClassName('notice')[i].style.top);
      //     document.getElementsByClassName('notice')[0].style.top = document.getElementsByClassName('notice')[0].offsetTop - 100 + 'px'

      //     console.log(document.getElementsByClassName('notice')[i].style.top)
      //   }
      
      // }, 500);
        
      console.table(objs);

  }
//鼠标移动改变title
let titleChange = function () {
  if (document.visibilityState === 'hidden') {
    document.title = "haha";
  } else {
    document.title = "come back";
  }
};
document.addEventListener('visibilitychange', titleChange);