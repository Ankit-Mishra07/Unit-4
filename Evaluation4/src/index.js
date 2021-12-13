const express = require("express")

const app = express()

app.use(express.json())


const {register ,login} = require("./controllers/auth.controller")
 const movieController = require("./controllers/movie.controller")

 const showsController = require("./controllers/shows.controller")
  const theatrecontroller = require("./controllers/theatre.controller")

  const screenController = require("./controllers/screen.controller")

  const seatController = require("./controllers/seat.controller")

 const upload = require("./middlewares/upload")

 app.post("/user/register",upload.single("profile_photo_url"),  register)
 app.post("/user/login", login)

 app.use("/movies", movieController)

 app.use("/shows", showsController)

  app.use("/theatre", theatrecontroller)

app.use("/screen", screenController)
app.use("/seats", seatController)


module.exports = app