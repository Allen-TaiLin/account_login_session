// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 登出
router.get('/', (req, res) => {
  //清除session
  req.session.destroy()
  // 讀取index檔案、渲染畫面
  return res.render('index')
})

// 匯出路由模組
module.exports = router