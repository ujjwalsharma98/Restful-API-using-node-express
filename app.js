var express = require('express')
var app = express()

var port = process.env.PORT || 3000;

app.get('/' ,(req,res) => {
    res.send("Welome to my page")
})

app.listen(port, () => {
    console.log("App is running on port" + port)
})




