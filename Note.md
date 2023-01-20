# 记录
* 最外层目录设置 
```
"private": "true",
```
防止被发布出去


# pnpm 相关

* 子包命名空间

针对pnpm packages下的包，包名一般都通用为命名空间+项目名，这里命名为@monorepo/http,必须要命名，不然pnpm add --filter的时候找不到添加包的项目目录
>比如这里叫 @hou/swiper

* 工作空间依赖

直接在根目录安装全局依赖 `pnpm i typescript` 会报错，这里要指明 `-w` 安装到全局依赖

* 只允许pnpm

当在项目中使用 pnpm 时，如果不希望用户使用 yarn 或者 npm 安装依赖，可以将下面的这个 preinstall 脚本添加到工程根目录下的 package.json中：
```
{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}
```

preinstall 脚本会在 install 之前执行，现在，只要有人运行 npm install 或 yarn install，就会调用 only-allow 去限制只允许使用 pnpm 安装依赖。
