const express = require ('express')
const {connectDB} = require('./config/db')
const ah = require('./config/hello')

const app = express()
app.use(express.json())

//connectDB()
//connect()

app.use('/',()=>{
    console.log("hello1")
    ah.check()
})

ah.check()

var server = app.listen(process.env.PORT, function(){
    console.log(`Server is running on PORT: ${process.env.PORT}`)
})
