/**
 * - [] 之后提取到外部发包
 * - [] 支持传入自定义设计稿宽度
 * - [] viewport原理分析—— meta width=device-width
 * - [] 模块化写法演进体验（https://www.cnblogs.com/lvzl/p/14780565.html）
 */

(function () {
  function flexible(width) {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;
    // mock
    // const designWidth = 1920;
    const designWidth = width || 1334;
    console.log('designWidth: ', designWidth);

    /*   // adjust body font size
    function setBodyFontSize() {
      if (document.body) {
        document.body.style.fontSize = 12 * dpr + 'px';
      } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize);
      }
    }
    setBodyFontSize(); */

    // set 1rem = viewWidth / 10
    function setRemUnit() {
      // var rem = docEl.clientWidth / 10;
      var rem = (docEl.clientWidth * 100) / designWidth;
      docEl.style.fontSize = rem + 'px';
    }

    // 等比缩放
    // 1920  docEl.clientWidth
    // 100   x

    setRemUnit();

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit();
      }
    });

    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement('body');
      var testElement = document.createElement('div');
      testElement.style.border = '.5px solid transparent';
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines');
      }
      docEl.removeChild(fakeBody);
    }
  }
  window.flexible = flexible;
})();
