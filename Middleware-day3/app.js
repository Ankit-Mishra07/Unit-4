const express = require("express")

const app = express();

const users = require("./MOCK_DATA.json")

const logger = (req, res, next) => {
   
}

///app.use(logger)

app.get("/users" ,logger, (req, res) => {
    res.send()
})

app.listen(2003, () => {
    console.log("Listening on port 2003")
})