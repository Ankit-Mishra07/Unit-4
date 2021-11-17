const express = require("express")


const app = express()

app.listen(3333 , () => {
    console.log("Listening on PORT 3333")
})


const getdata = require("./MOCK_DATA.json")

app.get("/" , (req, res) => {
    res.send("Welcome to Home page")
})

app.get("/users", (req, res) => {
    res.send(getdata)
})