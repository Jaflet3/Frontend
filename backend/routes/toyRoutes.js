const express = require("express");

const router = express.Router();

const Toy = require("../models/Toy");

const auth = require("../middleware/auth");

// Get All Toys
router.get("/", async (req, res) => {

    try {

        const toys = await Toy.find();

        res.json(toys);

    } catch (err) {

        res.status(500).json(err);

    }

});

// Get Toy By ID
router.get("/:id", async (req, res) => {

    try {

        const toy = await Toy.findById(req.params.id);

        res.json(toy);

    } catch (err) {

        res.status(500).json(err);

    }

});

// Add Toy
router.post("/", auth, async (req, res) => {

    try {

        const toy = new Toy(req.body);

        await toy.save();

        res.status(201).json(toy);

    } catch (err) {

        res.status(500).json(err);

    }

});

// Update Toy
router.put("/:id", auth, async (req, res) => {

    try {

        const toy = await Toy.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
            }

        );

        res.json(toy);

    } catch (err) {

        res.status(500).json(err);

    }

});

// Delete Toy
router.delete("/:id", auth, async (req, res) => {

    try {

        await Toy.findByIdAndDelete(req.params.id);

        res.json({
            message: "Toy Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router;