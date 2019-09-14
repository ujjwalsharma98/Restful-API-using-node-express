const express = require('express')
const mongoose = require('mongoose')

const app = express()
const db = mongoose.connect('mongodb://localhost/booksAPI')

const bookRouter = express.Router()
const port = process.env.PORT || 3000;
const Books = require('./models/bookModel')

bookRouter.route('/books')
    .get((req,res) => {
        const response = { Hello : 'This is my API'}
        res.json(response)
    })
app.use('/api', bookRouter)

app.get('/', (req, res) => {
    res.send("Running fine with nodemon")
})

app.listen(port, () => {
    console.log(`App is running on port  ${port}`)
})




