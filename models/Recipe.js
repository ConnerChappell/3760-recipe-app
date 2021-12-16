const { model, Schema } = require("mongoose");

const Recipe = new Schema({
    meal: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    ingredient1: {
        type: String,
    },
    ingredient2: {
        type: String,
    },
    ingredient3: {
        type: String,
    },
    ingredient4: {
        type: String,
    },
    ingredient5: {
        type: String,
    },
    ingredient6: {
        type: String,
    },
    ingredient7: {
        type: String,
    },
    ingredient8: {
        type: String,
    },
    ingredient9: {
        type: String,
    },
    ingredient10: {
        type: String,
    },
    ingredient11: {
        type: String,
    },
    ingredient12: {
        type: String,
    },
    ingredient13: {
        type: String,
    },
    ingredient14: {
        type: String,
    },
    ingredient15: {
        type: String,
    },
    ingredient16: {
        type: String,
    },
    ingredient17: {
        type: String,
    },
    ingredient18: {
        type: String,
    },
    ingredient19: {
        type: String,
    },
    ingredient20: {
        type: String,
    },
    measure1: {
        type: String,
    },
    measure2: {
        type: String,
    },
    measure3: {
        type: String,
    },
    measure4: {
        type: String,
    },
    measure5: {
        type: String,
    },
    measure6: {
        type: String,
    },
    measure7: {
        type: String,
    },
    measure8: {
        type: String,
    },
    measure9: {
        type: String,
    },
    measure10: {
        type: String,
    },
    measure11: {
        type: String,
    },
    measure12: {
        type: String,
    },
    measure13: {
        type: String,
    },
    measure14: {
        type: String,
    },
    measure15: {
        type: String,
    },
    measure16: {
        type: String,
    },
    measure17: {
        type: String,
    },
    measure18: {
        type: String,
    },
    measure19: {
        type: String,
    },
    measure20: {
        type: String,
    },
    youtube: {
        type: String,
        required: false,
    },
    favorite: {
        type: Boolean,
        default: false,
    }
})

module.exports = model('recipe', Recipe)