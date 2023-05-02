import express from 'express';
import config from '../../config/config';

import { verifyToken } from '../../model/token'
const router = express.Router();

/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
  /* 
    #swagger.tags = ['test']
    #swagger.s ecurity = [{
      "bearerAuth":[]
    }]
  } */
  res.status(200)
  res.send(`此路徑是: localhost:${config.port}/api/test`);
});

router.get('/list',(req,res) => {
    /* 
    #swagger.tags = ['test']
  } */
  res.status(200)
  res.send('list')
})


//測試驗證 token 
router.get('/testToken',(req,res) => {
  /* 
    #swagger.tags = ['test']
    #swagger.security = [{
      "bearerAuth":[]
    }]
  } */

  const token = (req.headers.authorization || '').replace('Bearer ','')
  console.log(token);

  //驗證 token
  const verify :Boolean = verifyToken(token)
  if(verify)
  {
    res.status(200)
    res.send('Token work')
  }
  else{
    res.status(200)
    res.send('Token error')
  }
 
})

module.exports = router ;