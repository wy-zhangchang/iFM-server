// 引入mongoose
const mongoose = require('mongoose')
// 创建schema对象
const materialtypeSchema = new mongoose.Schema({
  id:Number,
  name:String,
  objects:Array
})

// 暴露模型对象
module.exports = mongoose.model('materialtype', materialtypeSchema)