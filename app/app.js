require('dotenv').config('../.env')
const express = require('express')
const {errorHandler,notFoundHandler} = require('./error')

const app = express()




// middleware connection
app.use(require('./middleware'))
// router import
app.use(require('./routes'))
// Error Middleware
app.use(notFoundHandler)
// error handel
app.use(errorHandler)



module.exports = app; 