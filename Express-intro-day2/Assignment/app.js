const express = require("express")

const app = express()

app.use(express.json());
const books = require("./books.json")

const dataa = {
    api_requested_by:"Your name",
    books:  books
}

const logger = (name) => {
   
return (req, res, next) => {
  
    dataa.api_requested_by = name
    next()
}

}


// const api_requested_by="Ankit Mishra"

app.get("/",logger("Ankit Mishra"), (req, res) => {

    res.send(dataa)
})

app.post("/books",logger("Ankit Mishra"), (req, res) => {
    const newuser = [...books, req.body]
    dataa.books = newuser
    res.send(dataa)
})

app.get("/books/:id",logger("Ankit Mishra"), (req, res) => {
    const specific = books.filter((name) => name.id === +req.params.id)

    dataa.books = specific[0]

    res.send(dataa)
})


app.patch("/books/:id" ,logger("Ankit Mishra"), (req, res) => {
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

    dataa.books = newBook

    res.send(dataa)
})


app.delete("/books/:id" , logger("Ankit Mishra"),(req, res) => {
    const newBook = books.filter((book) => book.id !== +req.params.id)

    dataa.books = newBook

    res.send(dataa)
})




app.listen(2002, () => {
    console.log("Listening on PORT 2002")
})