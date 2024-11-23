require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const userRoutes = require('./routers/user');
const adminRoutes = require('./routers/admin');
const requireAuth = require('./middleware/requireAuth')
const mongoose = require('mongoose')

// enabling CORS for some specific origins only.
let corsOptions = {
    // origin:'https://abc.onrender.com',
  AccessControlAllowOrigin: '*',  
  origin: '*',  
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
 }
//cors
app.use(cors(corsOptions));
//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method);
    next()
})


//routes from route/user
app.use('/api/user',userRoutes)
app.use('/api/admin',requireAuth,adminRoutes)

//connect to db
mongoose.connect(process.env.DB_URI)
    .then(()=>{
        app.listen(port, () => {
            console.log(process.env.DB_URI);
            console.log(`Database connected & app listening on port ${port}!`)
        })
    })
    .catch((error) =>{
        console.log(error);
    })