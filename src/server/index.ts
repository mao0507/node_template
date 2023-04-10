//引入通用設定
import app from '../config/express'




//引入router檔案，設定路由
app.use('/api/test', require('../server/router/test'))
app.use('/api/auth', require('../server/router/auth'));


//引入swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger/swagger.json');

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



//選擇port
const port = 9527;
//開始監聽
app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);

  //require('child_process').exec(`start http://localhost:${port}/swagger`);
});

