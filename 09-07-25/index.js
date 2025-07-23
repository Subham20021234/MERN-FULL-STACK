import express from 'express'
import logger from 'morgan';
import userRoute  from './routes/user.route.js';
// import jobrout from './routes/job.route.js'
// import commentrout from './routes/comment.route.js'
import dotenv from 'dotenv';
import connectDB from './utils/db.js'
 

dotenv.config();
const app = express()
app.use(logger('dev'))

app.use(express.json());

// app.use(express.urlencoded({extended:true}))

connectDB()

app.get("/",(req,res)=>{
    res.send("hellow Backend HERE")
})
app.use("/api/user",userRoute)






// app.use("/api/job",jobrout)
// app.use("/api/comment", commentrout);
// app.use("/api/post",postrout)
// company
// app.use("/api/user",userRoute)
// // job
// app.use("/api/user",userRoute)
// // application api
// app.use("/api/user",userRoute)


app.listen(3006,()=>{
    console.log('server connected');
})
 







