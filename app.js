// require packages used in the projects
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const expSession = require('express-session')
const app = express()
const port = 3000

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
// setting static files
app.use(express.static('public'))

app.use(expSession({
  resave: false,
  saveUninitialized: true, // 是否儲存未初始化的會話
  secret: 'keyboard cat', // 對session id 相關的cookie 進行簽名
  cookie: { maxAge: 60 * 1000 } // 設定 session 的有效時間，單位毫秒
}))

// 設定資料庫
require('./config/mongoose')


// routes setting
// 將 request 導入路由器
app.use(routes)

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})