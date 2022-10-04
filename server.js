const { response } = require('express')
const express = require('express')
const res = require('express/lib/response')

const PORT = process.env.PORT || 3001
const app = express()
const notesRoutes = require('./routes/apiRoutes/notesRoutes')
const htmlRoutes = require('./routes/htmlRoutes/index')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.use('/api', notesRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`)
})