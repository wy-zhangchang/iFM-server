
// 1.连接数据库
require('../tools/mongo')

// 2.获取模型对象
const MaterialtypeModel = require('../models/materialtype')
const MateriallistModel = require('../models/materiallist')

// 注意：materialtype 对应数据库 materialtypes
// 3.查询操作
/*MaterialtypeModel.find({}, function (err, list) {
  if(!err){
    // console.log(JSON.stringify(list[0].objects))
  }
})*/

// 4.添加操作（大类）
/*MaterialtypeModel.create({id:110, name:'DEMO测试', objects:[]}, function (err, item) {
  if(!err){
    console.log(item)
  }
})*/

// 5.追加操作（元素）
/*MaterialtypeModel.updateOne({id:110}, {$push:{objects:{id:1102, name:'demo2测试', objecttype:110, is_consumable:1}}}, function (err, item) {
  if(!err){
    console.log(item)
  }
})*/

/*MateriallistModel.findOne({id:996}, function (err, item) {
  if(!err){
    // console.log(JSON.stringify(item.data))
  }
})*/

/*MateriallistModel.updateOne({id:996}, {$push:{data:{id:461, name:'DEMO2', is_ordered:0, rfid_sign:null, specification:'DEMO2', brand:'DEMO2', unit:'DEMO2'}}}, function (err, item) {
  if(!err){
    console.log(item)
  }
})*/

MateriallistModel.updateOne({id:996}, {$pull:{data:{id:600}}}, function (err, item) {
  if(!err){
    console.log(item)
  }
})