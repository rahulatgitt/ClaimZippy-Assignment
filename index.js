const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/employee')
mongoose.connect('mongodb://localhost:27017/Employee', {
  //useNewUrlParser: true,
 // useUnifiedTopology: true,
});
const db = mongoose.connection

db.on('error',(err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('DataBase Connection Established!')
})

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const Port = process.env.Port || 3000

app.listen(Port, () => {
    console.log('server is up and running on port ', Port)
})

app.use('/api/employee', EmployeeRoute)
