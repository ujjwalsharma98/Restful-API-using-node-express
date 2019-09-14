const express = require('express')
const app = express()

const bookRouter = express.Router()
const port = process.env.PORT || 3000;



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




