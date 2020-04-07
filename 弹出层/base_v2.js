let config = {
  scroll: false,//是否允许滚动
  gradient: false, //渐出效果
  pop: false, //弹出效果
  click: false, //点击外部关闭
};
let yyb = window.yyb = {
  unlock: function (content) {
    let opt = unit.expend({}, {
      scroll: true,
    }, content);
    var o = new Layer(opt);
    return o;
  },
  lock: function (content) {
    let opt = unit.expend({}, {
      scroll: false,
    }, content);
    var o = new Layer(opt);
    return o;
  },
};
let unit = {
  expend: function () {
    let target = arguments[0],
        i = 1,
        length = arguments.length,
        obj, copy, name;
      
    for(; i < length; i++) {
      obj = arguments[i];
      for(name in obj) {
        copy = obj[name];
        target[name] = copy;
      }
    }
    console.log(target)
    return target;
  },
  createElem: function (n) {
    let wrapper = document.createElement('div');
    let inner = document.createElement('div');
    let close = document.createElement('span');
    close.innerText = '点击关闭';
    wrapper.style.display = 'flex';
    close.classList.add('jump-after');
    wrapper.classList.add('jumpWrapper');
    inner.classList.add('jump');
    inner.appendChild(close)
    wrapper.appendChild(inner);
    document.body.appendChild(wrapper);

    close.addEventListener('click', () => {
      if (n.config.gradient && !n.config.pop) {
        unit.removeGradient();
      } else if (!n.config.gradient && n.config.pop) {
        unit.removePop();
      }
    });
    // unit.removeElem)
  },
  removeElem: function () {
    let wrapper = document.querySelector('.jumpWrapper');
    let inner = document.querySelector('.jump');
    document.body.style.overflow = '';
    wrapper.removeChild(inner);
    document.body.removeChild(wrapper);
  },
  setClick: function (itme) {
    let wrapper = document.querySelector('.jumpWrapper')
    let inner = document.querySelector('.jump');
    wrapper.addEventListener('click', () => {
      let target = window.event;
      if (target.target === inner || target.target === inner.firstChild) {
        return;
      }
      if (itme.config.gradient && !itme.config.pop) {
        unit.removeGradient();
      } else if (!itme.config.gradient && itme.config.pop) {
        unit.removePop();
      }
    }, true);
  },
  setGradient: function () {
    let wrapper = document.querySelector('.jumpWrapper')
    let inner = document.querySelector('.jump');
    inner.classList.add('jumpOut');
    wrapper.classList.add('jumpOut');
  },
  removeGradient: function () {
    let wrapper = document.querySelector('.jumpWrapper')
    let inner = document.querySelector('.jump');
    wrapper.classList.remove('jumpOut');
    inner.classList.remove('jumpOut');
    wrapper.classList.add('jumpIN');
    inner.classList.add('jumpIN');
    let timer = setInterval( () => {
      unit.removeElem();
      clearInterval(timer);
    },300);
  },
  setPop: function () {
    let inner = document.querySelector('.jump');
    inner.classList.add('popOut');
  },
  removePop: function () {
    let close = document.querySelector('.jump-after');
    let inner = document.querySelector('.jump');
    close.style.display = 'none'
    inner.classList.remove('popOut');
    inner.classList.add('popIn');
    let timer = setInterval( () => {
      unit.removeElem();
      clearInterval(timer);
    },200);
  },
}
function Layer (opt) {
  this.config = unit.expend({}, config, opt);
  this.create();
}
Layer.prototype.create = function () {
  if(this.config.scroll) {
    this.setUnlock();
  } else if(!this.config.scroll) {
    this.setLock();
  }
  if (this.config.gradient && !this.config.pop) {
    this.setGradient();
  } else if (!this.config.gradient && this.config.pop) {
    this.setPop();
  }
};
Layer.prototype.setUnlock = function () {
  let that = this;
  console.log(that)
  unit.createElem(that);
    //设置弹出层外面点击是否关闭弹出层
  if(this.config.click) {
    this.setClick();
  }
};
Layer.prototype.setLock = function () {
  let that = this;
  document.body.style.overflow = 'hidden';
  unit.createElem(that);
  if(this.config.click) {
    this.setClick();
  }
};
Layer.prototype.setGradient = function () {
  unit.setGradient();
};
Layer.prototype.setPop = function () {
  unit.setPop();
};
Layer.prototype.setClick = function () {
  let that = this;
  unit.setClick(that);
};
// console.log(yyb.unlock)