// 连接数据库
require('./tools/mongo')
// 获取模型对象
const MaterialtypeModel = require('./models/materialtype')
const MateriallistModel = require('./models/materiallist')

// 引入express
const express = require('express')
// 创建服务器
const app = express()

// 配置路由
app.get('/materialtype', function (req, res) {
  // 查询操作
  MaterialtypeModel.find({}, function (err, list) {
    if(!err){
      // 响应数据
      res.send({data:list})
    }
  })
})

// 添加操作
app.get('/materialtype_add', function (req, res) {
  const {id, name} = req.query
  // id 数据库自动生成
  MaterialtypeModel.create({id:800, name:name, objects:[]}, function (err, item) {
    if(!err){
      res.send({data:item})
    }
  })
})

// 追加操作
app.get('/materialtype_update', function (req, res) {
  const {id, name} = req.query
  // id 获取父级id
  MaterialtypeModel.updateOne({id:id}, {$push:{objects:{id:8000, name:name, objecttype:id, is_consumable:1}}}, function (err, item) {
    if(!err){
      item = {id:1114}
      res.send({data:item})
    }
  })
})

app.get('/materiallist', function (req, res) {
  const id = req.query.id
  MateriallistModel.findOne({id:id}, function (err, item) {
    if(!err){
      // 响应数据
      res.send({data:item.data})
    }else{
      res.send({err})
    }
  })
})

app.get('/materiallist_add', function (req, res) {
  const {id, name, brand, unit} = req.query
  MateriallistModel.updateOne({id:id}, {$push:{data:{id:1000, name:name, is_ordered:0, rfid_sign:null, specification:'DEMO2', brand:brand, unit:unit}}}, function (err, item) {
    if(!err){
      res.send({data:item})
    }
  })
})

app.listen('8000', function () {
  console.log('服务器启动成功')
})