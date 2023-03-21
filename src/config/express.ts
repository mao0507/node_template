/* express.js */
import express from 'express';
import config from './config';
import bodyParser  from 'body-parser';




const app = express();
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))




/* GET home page. */
app.get('/', (req, res) => {
  res.send(`server started on  port http://127.0.0.1:${config.port} (${config.env})`);
});

/**
 * 
 * index 進入router
 * 
 */
import index from '../server/router/index';

app.use('/api', index);



export default app;