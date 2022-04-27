const express = require('express')
const app = express()
const PORT = process.env.PORT | 3001
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', htmlRoutes)
app.use(express.static(__dirname + '/public'))


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})