// 載入 restaurant model
const AccountData = require('../account')
//範本資料
const accountList = require('../../users.json')
// 載入資料庫套件
const db = require('../../config/mongoose')


//新增種子資料
db.once('open', () => {
  for (let i = 0; i < accountList.length; i++) {
    AccountData.create({
      firstName: accountList[i].firstName,
      email: accountList[i].email,
      password: accountList[i].password
    })
  }
  console.log('Users Data Insert Done')
})