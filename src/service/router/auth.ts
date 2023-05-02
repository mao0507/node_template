import express from 'express';
//登入相關控制項
import Auth from '../../controller/auth'

const router = express.Router();

const { login }  = Auth();


router.post('/', (req,res) => {
  
  /* 
    #swagger.tags = ['auth']
    #swagger.description = '登入功能'
    #swagger.parameters['account'] = {
      description:'輸入帳號',
      required:true,
      type:'string'
    }
    #swagger.parameters['password'] = {
      description:'輸入密碼',
      required:true,
      type:'string'
    }
    #swagger.requestBody = {
      required:false,
    }
  } */

  const { account, password } = req.body

  const response = login({account,password})

  res.status(200)
  res.send(response)
})




module.exports = router ;