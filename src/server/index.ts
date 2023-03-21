// import config from '../config/config';
// import app from '../config/express';


// // listen on port config.port
// app.listen(config.port, () => {
//   console.log(`server is listening on ${config.port} !!!`);
// });


// export default app;


import express, { NextFunction, Request, Response } from 'express';
import bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const app = express();
const port = 9527;

app.use(jsonParser)


app.get('/api/test',async(req:Request,res:Response,next:NextFunction) => {
  res.status(200);
  res.send('test work');
})

app.post('/api/Auth/Login',async(req,res) =>{
  console.log(req.body)
  const { a , p } = req.body;
  const result = {
    success:false,
    message:'',
    content:null
  };

  try  {
    if(a && p )
    {
      const loginData = require('../server/modules/login.json');
      res.status(200)
      result.success = true;
      result.message = 'work';
      result.content = loginData;
    }
    else if(!a){
      res.status(200)
      result.success = false;
      result.message = '請輸入帳號';
    }
    else if(!p){
      res.status(200)
      result.success = false;
      result.message = '請輸入密碼';
    }
    res.send(result)

  }
  catch(error)
  {
    res.status(500)
    res.send(error)
  }
})

app.get('/api/User/FeatureMap',(req,res) => {
  const data = require('../server/modules/feature.json')
  const result = {
    success:true,
    message:'work',
    content:data
  };

  res.send(data)
})


app.get('/api/Auth/ValidateToken',(req,res) => {
  const data = require('../server/modules/response_valitoken_20230320.json')
  res.send(data)
})

app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});


