import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
dotenv.config();

const app = express();

  
  app.use(cors); // Apply CORS middleware with options
  
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get('/', async(req,res)=>{
    res.send('Hello from DALL-E!');
})

const startServer = async () => {

    try{
      await  connectDB(process.env.MONGODB_URL);
        app.listen(8080, ()=> console.log('server has started on port 8080'))

    }
    catch (error){
      console.log(error);
    }
}

startServer();