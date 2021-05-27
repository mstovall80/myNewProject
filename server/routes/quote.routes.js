const QuoteController = require("../controllers/quote.controller");


module.exports = app =>{
    app.get("/api/quotes", QuoteController.findAllQuotes)
    app.post("/api/quotes/create", QuoteController.createQuote)
    app.get("/api/quotes/:id", QuoteController.findOneQuote)
    app.put("/api/quotes/update/:id", QuoteController.updateOneQuote)
    app.delete("/api/quotes/delete/:id", QuoteController.deleteQuote)
}