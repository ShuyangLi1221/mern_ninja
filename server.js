const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routes = require('./routes/workouts')
dotenv.config();

//express app
const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//connnect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('server started on 4000')
        })

    })
    .catch((err)=>{
        console.log(err)
    })
//routes
app.use('/api/workouts',routes)
