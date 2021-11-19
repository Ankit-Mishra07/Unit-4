const express = require("express")

const app = express()

app.use(express.json());

const logger = (req, res, next) => {
    next()
}

const books = require("./books.json")

const api_requested_by="Ankit Mishra"

app.get("/", (req, res) => {
    res.send({api_requested_by, books})
})

app.post("/books", (req, res) => {
    const newuser = {api_requested_by ,books:[...books, req.body]}
    res.send(newuser)
})

app.get("/books/:id", (req, res) => {
    const specific = books.filter((name) => name.id === +req.params.id)

    const data = {
        api_requested_by: "Ankit Mishra",
        book : specific[0]
    }

    res.send(data)
})


app.patch("/books/:id" , (req, res) => {
    const newBook = books.map((auth) => {
        if(+req.params.id === auth.id) {
            if(req?.body?.id) auth.id = req.body.id;
            if(req?.body?.author) auth.author = req.body.author;
            if(req?.body?.book_name) auth.book_name = req.body.book_name;
            if(req?.body?.pages) auth.pages = req.body.pages;
            if(req?.body?.published_year) auth.published_year = req.body.published_year;
        }
        return auth
    })

    const data = {
        api_requested_by: "Ankit Mishra",
        books: newBook
    }

    res.send(data)
})


app.delete("/books/:id" , (req, res) => {
    const newBook = books.filter((book) => book.id !== +req.params.id)

    const data = {
        api_requested_by:"Ankit Mishra",
        books : newBook
    }
    res.send(data)
})




app.listen(2002, () => {
    console.log("Listening on PORT 2002")
})