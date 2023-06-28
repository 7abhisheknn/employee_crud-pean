const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')
const employeeRoutes = require('./controllers/employee.controller')

const app = express()
app.use(bodyParser.json())
app.use('/api/employees', employeeRoutes)
// app.use(errorHandler)


db.connect().then((connection) => {
    console.log(connection.client.serverVersion)
    app.listen(3000, () => console.log('server running on port 3000'))
    connection.done()
}).catch((err) => {
    console.log('ERROR:', err.message || err)
})
