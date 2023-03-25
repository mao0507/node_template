//引入通用設定
import app from '../config/express'

//引入router檔案
import login from './router/login'
import test from './router/test'

/**
 * 設定路由
 * 
 * /api/test  測試用API
 * /api/login 登入API
 * 
 */

app.use('/api/test',test)
app.use('/api/login', login);


//選擇port
const port = 9527;
//開始監聽
app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});
