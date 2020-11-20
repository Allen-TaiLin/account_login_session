// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// routes setting
router.get('/', (req, res) => {
  console.log(req.session)
  console.log(req.session.firstName)
  console.log(req.sessionID)
  //session 有紀錄使用者名稱的話
  if (req.session.firstName) {
    const user = req.session
    return res.render('show', { user })
  } else {
    // 讀取index檔案、渲染畫面
    return res.render('index')
  }
})

// 匯出路由模組
module.exports = router
