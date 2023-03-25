import express from 'express';
import config from '../../config/config';
const router = express.Router();

/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
  res.send(`此路徑是: localhost:${config.port}/api/test`);
});

router.get('/list',(req,res) => {
  res.send('list')
})

export default router;