let that;
class Tab {
  constructor () {
    that = this;
    this.updateElm();
    this.nav = document.querySelector('.nav');
    this.content = document.querySelector('.content');
    this.add = document.querySelector('.add');
    this.init();
  }
  updateElm () {
    that.removes = Array.from(document.querySelectorAll('.nav a span'));
    that.navs = Array.from(document.querySelectorAll('.nav a'));
    that.items = Array.from(document.querySelectorAll('.item'));
  }
  // 初始化
  init() {
    this.updateElm();
    that.navs.forEach( (item, index) => {
      item.index = index;
      item.addEventListener('click', that.toggleTab);
    });
    that.add.addEventListener('click', that.addTab);
    that.removes.forEach( (item) => {
     item.addEventListener('click', that.deleteTab);
    });
  }

  // 切换功能
  toggleTab () {
    // console.log(this.index)
    that.clearClass();
    that.navs[this.index].classList.add('a-active');
    that.items[this.index].classList.add('item-active')
  }

  // 添加功能
  addTab () {
    let newA = document.createElement('a');
    let newDiv = document.createElement('div');
    let newSpan = document.createElement('span');

    that.clearClass();

    newA.innerHTML = "xinde";
    newDiv.innerHTML = newA.innerHTML;
    newSpan.innerHTML = ' x';
    newA.href = 'javascript:void(0);';

    newDiv.classList.add('item');
    newA.classList.add('a-active');
    newDiv.classList.add('item-active');

    newA.appendChild(newSpan);
    that.nav.appendChild(newA);
    that.content.appendChild(newDiv);

    that.init();
    
  }

  // 删除功能
  deleteTab (e) {
    e.stopPropagation();
    let index = this.parentNode.index;
    that.nav.removeChild(that.navs[index]);
    that.content.removeChild(that.items[index]);
    index --;

    that.init();
    console.log(index, that.navs.length);
    if (that.navs.length === 0) {
      alert('最后一个了');
      return;
    } else if (index !== that.navs.length) {
      let n = that.navs.length - 1;
      that.navs[n].classList.add('a-active');
      that.items[n].classList.add('item-active');
    } else {
      that.navs[index].classList.add('a-active');
      that.items[index].classList.add('item-active');   
    }


    // console.log()
  }

  // 编辑功能
  editTab () {

  }

  // 清除css
  clearClass () {
    that.navs.forEach( (item) => {
      item.classList.remove('a-active');
    });
    that.items.forEach( (item) => {
      item.classList.remove('item-active');
    });
  }
}
let tab1 = new Tab();
