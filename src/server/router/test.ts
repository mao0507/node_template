import express from 'express';
import config from '../../config/config';
const router = express.Router();

/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
  /* 
    #swagger.tags = ['test']
    #swagger.s ecurity = [{
      "b earerAuth":[]
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


module.exports = router ;