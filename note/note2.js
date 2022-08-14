/*
const express = require('express')
const app = express()
 
// 1. 引入包
const multer = require('multer');
// 2. 配置
const upload = multer({ dest: 'uploads/' }) // 上传的文件会保存在这个目录下
// uploads表示一个目录名，你也可以设置成其它的
 
// 3. 使用
// 这个路由使用第二个参数 .upload.single表示单文件上传， 'cover' 表示要上传的文件在本次上
次数据中的键名。对应于前端页面上的：
//  <input type="file" name='cover'/>
 
app.post("/postfile", upload.single('cover'), function (req, res) {
  // req.file 记录了文件上传的信息
  // req.body 记录了其它普通参数（非文件）的信息
  // 其它操作
  res.send({ body: req.body, file: req.file })
 
})
 
app.listen('8085', () => {
  console.log('8085已启动');
})
*/

