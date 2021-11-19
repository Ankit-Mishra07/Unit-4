const express = require("express")

const app = express();

const users = require("./MOCK_DATA.json")

const autorise = (permission) => {

    return (req, res, next) => {
        console.log(permission)
        next()
    }
}

const authenticate = (req, res, next) => {
    console.log("authenticate")
    next()
}

///app.use(logger)

app.get("/users" , (req, res) => {
    res.send(users)
})

app.get("/users/:email", (req,res) => {
    const user = users.filter((user) => user.email === req.params.email)
    res.send(user)
})

app.post("/users" , authenticate, autorise("ankit"), (req, res) => {
    res.send("from inside post")
})


app.listen(2003, () => {
    console.log("Listening on port 2003")
})