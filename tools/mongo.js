// 引入mongoose
const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost:27017/ifm_web')

mongoose.connection.on('open',()=>{
  console.log('数据库连接成功')
})
