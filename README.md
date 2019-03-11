# hello-world
## 0.环境要求
windows
## 1.安装mongodb，node(已安装的升级到新版本)
<p>
下载node.js https://nodejs.org/zh-cn/
去官网下载mongodb，并配置好环境变量 https://www.mongodb.com/download-center/community
注：如果接下来提示有关gyp的报错
执行以下步骤

```sh
npm install --global --production windows-build-tools
```
以上步骤会自动安装python，如果你已经安装python，请添加新的环境变量。
</p>
```

```
## 2.安装依赖
```sh
npm run install-all
```

## 3.编译运行
```sh
npm run dev
```
