/**
 * 核心原理
 * 在切换时，图片列表的 wrapper（也就是ul-img)的left值配合过渡
 * */

/*
TODO:

- [ ] loop模式（复制一个slide出来
- [ ] 原生拖拽切换
*/

// 最外层容器
const container = document.querySelector('.container');
// slide的容器wrapper
const wrapper = document.querySelector('.ul-img');
/** 轮播页数 */
const slidesNum = (Array.from(wrapper.children) || []).length;

// 左右切换按钮
const leftBtn = document.querySelector('.prev');
const rightBtn = document.querySelector('.next');

// 数字切换指示器父
var numUlDom = document.getElementsByClassName('num-ul')[0]; // 数字按钮父级容器
var numList = document.getElementsByClassName('num-ul')[0].getElementsByTagName('li'); // 数字切换按钮列表

let swiperIdx = 0;

let timer = null;

// 判断是否为第一张/最后一张图片
let isFirstSlide = () => swiperIdx === 0;
let isLastSlide = () => swiperIdx === slidesNum - 1;

// 复制第一个元素到末尾
// 复制末尾元素到头部
const cloneHeadSlideDom = wrapper.firstElementChild.cloneNode(true);
const cloneEndlideDom = wrapper.lastElementChild.cloneNode(true);

// 将第一个元素放到末尾，用于复制
wrapper.appendChild(cloneHeadSlideDom);
// 将最后一个元素插入到最前面
wrapper.insertBefore(cloneEndlideDom, wrapper.firstElementChild);

// 最末尾的图浮动在最前面
cloneEndlideDom.style.position = 'absolute';
cloneEndlideDom.style.transform = 'translate(-100%)';

// 设置轮播切换
function setSlider() {
  // 优化前
  // wrapper.style.left = `${-600 * (swiperIdx)}px`;
  // 优化后：
  wrapper.style.transition = '300ms ease transform';
  wrapper.style.transform = `translate3d(${-600 * swiperIdx}px, 0, 0)`;
  console.log('swiperIdx: ', swiperIdx);

  // 更新指示器样式
  // setIndicatorStyle();
}

function setIndicatorStyle() {
  // 清空指示器样式
  Array.from(numUlDom.children).forEach((element) => {
    element.style.background = '';
  });

  numList[swiperIdx].style.background = '#ccc';
}

// 向后切换轮播
rightBtn.addEventListener('click', setNext);

function setNext() {
  // 到达复制位置
  // 5 === 5
  if (isLastSlide()) {
    // 立即跳转到第一个
    wrapper.style.transition = 'none';
    wrapper.style.transform = `translate3d(600px, 0, 0)`;

    wrapper.clientHeight;

    swiperIdx = 0;
    setSlider();

    // TODO:
    // 1. 为何先设置  `translate3d(600px, 0, 0)`;然后设置  `translate3d(600px, 0, 1)`; 第一次设置没有生效
    // 2. 当使用wrapper.clientHeight; 或者 setTimeOut 0 之后就让第一次设置生效了
    // 3. swiper是如何实现的？
  } else {
    swiperIdx += 1;
    setSlider();
  }
}

// 向前切换轮播
leftBtn.addEventListener('click', function () {
  if (isFirstSlide()) {
    wrapper.style.transition = 'none';
    wrapper.style.transform = `translate3d(${-600 * slidesNum}px, 0, 0)`;

    wrapper.clientHeight;
    swiperIdx = slidesNum - 1;
    setSlider();
  } else {
    swiperIdx -= 1;
    setSlider();
  }
});

numUlDom.addEventListener('click', (e) => {
  // 获取索引
  const idx = Number(e.target.dataset.index);
  console.log('idx: ', idx);

  if (!Number.isNaN(idx)) {
    swiperIdx = idx;
    // 直接设置transform来移动元素
    setSlider();
  }
});

function clearTimer() {
  if (timer) {
    clearInterval(timer);
  }
}

function autoPlay() {
  clearTimer();

  timer = setInterval(setNext, 5000);
}

function stopAutoPlay() {
  clearTimer();
}

// 鼠标移入容器，停止自动播放
// container.addEventListener('mouseenter', stopAutoPlay);
// 鼠标移出容器，开启自动播放
// container.addEventListener('mouseleave', autoPlay);

// 初始化默认调用一次设置
setIndicatorStyle();

// 开启格式化
// autoPlay();
