const express = require("express")

const router = express.Router()
const Show = require("../models/show.model")

router.post("/", async(req, res) => {
    try{

        const shows = await Show.create(req.body)
        return res.status(201).send(shows)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})


router.get("/", async(req, res) => {
    try{

        const shows = await Show.find({movie : req.query.movie})

        return res.status(201).json({shows})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/nearest", async(req, res) => {
    try{

        const shows = await Show.find({screen : req.query.screen})

        return res.status(201).json({shows})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})



module.exports = router