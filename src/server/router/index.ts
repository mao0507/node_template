import express from 'express';
import config from './../../config/config';
import login from './login'
const router = express.Router();

/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
  res.send(`此路徑是: localhost:${config.port}/api`);
});



export default router;