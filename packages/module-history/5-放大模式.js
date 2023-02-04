/**
 * 通过传入需要放大的模块，来对这个模块实时扩充
 */

var module1 = (function (mod){

  mod.m3 = function () {
  //...
  };
  
  return mod;
  
})(module1);
