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
// const slidesNum = Array.from(wrapper.children)
const slidesNum = (Array.from(wrapper.children) || []).length;

// 左右切换按钮
const leftBtn = document.querySelector('.prev');
const rightBtn = document.querySelector('.next');

// 数字切换指示器父
var numUlDom = document.getElementsByClassName("num-ul")[0]; // 数字按钮父级容器
var numList = document
  .getElementsByClassName("num-ul")[0]
  .getElementsByTagName("li"); // 数字切换按钮列表


let swiperIdx = 0;

function setSlider() {
  wrapper.style.left = `${-600 * (swiperIdx)}px`;

  // 设置指示器激活
  numList[swiperIdx].style.background = "#ccc";
}


// 向后切换轮播
rightBtn.addEventListener('click', function () {
  // 清空指示器样式
  numList[swiperIdx].style.backgroundColor = "";

  swiperIdx += 1;

  if (swiperIdx >= slidesNum) {
    swiperIdx = 0;
    wrapper.style.transition = "none";
  } else {
    wrapper.style.transition = "300ms ease left";
  }

  setSlider()
});

// 向前切换轮播
leftBtn.addEventListener('click', function () {
  // 清空指示器样式
  numList[swiperIdx].style.backgroundColor = "";

  swiperIdx-= 1;
  
  if (swiperIdx < 0) {
    swiperIdx = slidesNum - 1;
    wrapper.style.transition = "none";
  } else {
    wrapper.style.transition = "300ms ease left";
  }
  
  setSlider()
});
