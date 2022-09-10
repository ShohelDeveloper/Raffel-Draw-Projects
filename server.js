require('dotenv').config()

const http = require('http')

//import app
const app = require('./app/app')

 const server = http.createServer(app)

//  Check PORT
// console.log(process.env.PORT)

 const PORT = process.env.PORT || 8000
 server.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
 })