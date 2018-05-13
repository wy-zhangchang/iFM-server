// 引入mongoose
const mongoose = require('mongoose')
// 创建schema对象
const materiallistSchema = new mongoose.Schema({
  id:Number,
  recordsFiltered:Number,
  data:Array
})

// 暴露模型对象
module.exports = mongoose.model('materiallist', materiallistSchema)