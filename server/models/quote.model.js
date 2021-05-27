const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required"],
        minLength: [3, "Need at least three caracters."],
        maxLength: [500, "to many"]
    },

    author: {
        required: [true,"content is required"],
        type: String
    },

    quotedOn: {
        type: Date
    }
}, {timestamps:true})

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;