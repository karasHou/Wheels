// 利用函数作用域、作用域链可以创造一个防止被外界修改非主动暴露的成员

// 定义一个IIFE：Immediately-Invoked Function Expression，IIFE
const module = (function () {
  const a = 1;
  function f1() {
    return "f1"

  }

  function f2() {

    
  }

  return {
    a,
    f1
  }
})()


// 1
module.a

// f1
module.f1()

// error：无法访问到内部成员
//  具体原因参考函数作用域、作用域链
// module.f2
