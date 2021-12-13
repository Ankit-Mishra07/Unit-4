const express = require("express")

const router = express.Router()
const Seat = require("../models/seat.model")

const Show = require("../models/show.model")

router.post("/", async(req, res) => {
    try{

        const seat = await Seat.create(req.body)
        return res.status(201).send(seat)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/", async (req, res) => {
    try{

        const seats = await Seat.find({show : req.query.show})

        return res.status(201).json({seats})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.post("/seat" , async(req, res) => {
    try{

        const show = await Show.find({total_seats : {$gt : req.query.seat}})

        
        if(show.length > 0) {
        const seats = await Seat.create(req.body)
        
        return res.status(201).json({seats})
        }else {
            return res.status(500).json({status: "Failed", message: "seats not availble"})
        }

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})


module.exports = router