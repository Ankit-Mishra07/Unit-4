const express = require("express")

const router = express.Router()

const Movie = require("../models/movie.model")
const upload = require("../middlewares/upload")

router.post("/", upload.single("poster_url"),async(req, res) => {
    try {

        const movie = await Movie.create({
            name : req.body.name,
            actors : req.body.actors,
            languages: req.body.languages,
            directors: req.body.directors,
            poster_url : req.file.path
        })

        return res.status(201).send({movie})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/", async(req, res) => {
    try{

        const movies = await Movie.find({actors: req.query.actor})
        return res.status(201).send({movies})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})



module.exports = router