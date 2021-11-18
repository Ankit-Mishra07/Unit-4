const express = require("express")

const app = express()

app.use(express.json())

const users = require("./users.json")

app.get("/users" , (req, res) => {
    res.send({users})
})

app.get("/:first_name" , (req, res) => {
    const newUser = users.filter((user) => user.first_name === req.params.first_name)

    res.send(newUser)
})

app.post("/" , (req, res) => {
    const newUser = [...users, req.body]
    res.send(newUser)
})

app.patch("/:email" , (req, res) => {
    const newUser = users.map((user) => {
        if(req.params.email === user.email) {
            if(req?.body?.first_name) user.first_name = req.body.first_name;
            if(req?.body?.last_name) user.last_name = req.body.last_name;
            if(req?.body?.email) user.email = req.body.email;
            if(req?.body?.gender) user.gender = req.body.gender;
        }
        return user
    });
    res.send(newUser)
})


app.delete("/:first_name" , (req, res) => {
    const newUser = users.filter((user) => user.first_name !== req.params.first_name)
    res.send(newUser)
})

app.listen(2001, function() {
    console.log("Listening on PORT 2001")
})