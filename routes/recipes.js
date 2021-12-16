const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Recipe = require("../models/Recipe");

// GET recipe by id
router.get("/:id", async (req,res) => {
    await Recipe.findOne({
        id: req.params.id
    })
    .then((result) => {
        res.json(result)
    })
    .catch((error) => console.log(error))
})

// GET favorite recipes
router.get("/favorite/:favorite", async (req, res) => {
    await Recipe.find({
        favorite: req.params.favorite === 'true'
    })
    .then((result) => {
        res.json(result)
    })
    .catch((error) => console.log(error))
})

// POST add to favorites
router.post("/addToFavorites", async (req, res) => {
    const newRecipe = await new Recipe({
        meal: req.body.meal,
        id: req.body.id,
        image: req.body.image,
        instructions: req.body.instructions,
        ingredient1: req.body.ingredient1,
        ingredient2: req.body.ingredient2,
        ingredient3: req.body.ingredient3,
        ingredient4: req.body.ingredient4,
        ingredient5: req.body.ingredient5,
        ingredient6: req.body.ingredient6,
        ingredient7: req.body.ingredient7,
        ingredient8: req.body.ingredient8,
        ingredient9: req.body.ingredient9,
        ingredient10: req.body.ingredient10,
        ingredient11: req.body.ingredient11,
        ingredient12: req.body.ingredient12,
        ingredient13: req.body.ingredient13,
        ingredient14: req.body.ingredient14,
        ingredient15: req.body.ingredient15,
        ingredient16: req.body.ingredient16,
        ingredient17: req.body.ingredient17,
        ingredient18: req.body.ingredient18,
        ingredient19: req.body.ingredient19,
        ingredient20: req.body.ingredient20,
        measure1: req.body.measure1,
        measure2: req.body.measure2,
        measure3: req.body.measure3,
        measure4: req.body.measure4,
        measure5: req.body.measure5,
        measure6: req.body.measure6,
        measure7: req.body.measure7,
        measure8: req.body.measure8,
        measure9: req.body.measure9,
        measure10: req.body.measure10,
        measure11: req.body.measure11,
        measure12: req.body.measure12,
        measure13: req.body.measure13,
        measure14: req.body.measure14,
        measure15: req.body.measure15,
        measure16: req.body.measure16,
        measure17: req.body.measure17,
        measure18: req.body.measure18,
        measure19: req.body.measure19,
        measure20: req.body.measure20,
        youtube: req.body.youtube,
        favorite: req.body.favorite,
    })
    newRecipe.save()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => console.log(error))
})

// DELETE (work in progress)
router.delete("/delete/:id", async (req, res) => {
    await Recipe.findOneAndDelete({
        id: req.params.id
    })
        .then((result) => {
            res.json(result)
        })
        .catch((error) => console.log(error))
})


module.exports = router