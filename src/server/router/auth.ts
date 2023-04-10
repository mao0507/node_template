import express from 'express';
//登入相關控制項
import Auth from '../../controller/auth'

const router = express.Router();

const { login }  = Auth();


router.post('/', (req,res) => {
  
  /* 
    #swagger.tags = ['auth']
    #swagger.description = 'auth'
    #swagger.autoBody = false
    #swagger.parameters['account'] = {description:'string'}
    #swagger.parameters['password'] = {description:'string'}
  } */

  const { account, password } = req.body

  const response = login({account,password})

  res.status(200)
  res.send(response)
})




module.exports = router ;