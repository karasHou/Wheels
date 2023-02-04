//  在上一步的基础上，加工一下
(function(window){

  var _count = 0;

  function m1(){
      //...
  };

  function m2(){
      //...
  };
  window.module1 = {
      m1,
      m2
  };

  // 通过传入window，然后挂载在window上
})(window);


//  可以
window.module1.m1
