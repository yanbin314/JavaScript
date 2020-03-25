let Body = document.querySelector('body');
let btn = document.querySelector('.btn');
let objs = [];
//创建      
let indexArr = [];


let creatNotice = function (obj) {
  let num = obj.length - 1;
  console.log(obj);
  let Div = document.createElement('div');
  Div.innerHTML = obj[num].content;
  Div.style.top = obj[num].top + 'px';
  Div.style.height = obj[num].height + 'px';
  Div.className = 'notice';
  Body.appendChild(Div);
  // removeNotice(obj, num, Div);
};
//删除
// let removeNotice = function (obj, startIndex, div) {
//   setTimeout(function () {
//     div.style.display = obj[startIndex].display;
//     objs.splice(startIndex, 1);
//     console.log(objs);
//   },1000);

// }
//计算到顶部的距离
let ToTop =  function () {

}
//添加到数组中
let initial = function (obj) {
  obj.top = obj.top * (obj.index + 1) + obj.height * (obj.index);
  objs.push(obj);
  console.log(objs);
  creatNotice.call(this, objs);
};
{
  let index = 0;
  btn.addEventListener('click', () => {
    initial({
      content: '测试测试',
      top: '40',
      marginBtm: '20',
      height: '60',
      index: index,
      display: 'none',
    });
    index++;
  });
}