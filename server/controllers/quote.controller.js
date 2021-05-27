const Quote = require('../models/quote.model');


module.exports.findAllQuotes =(req, res)=>{
    Quote.find()
        .then(allquotes =>{
            res.json({results: allquotes})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.createQuote = (req, res)=>{

    console.log("REQUEST.BODY looks like this--->", req.body)
    Quote.create(req.body)
        .then(newQuote=>{
            res.json({results: newQuote})
        })
        .catch(err=>{
            console.log(err)
            res.json(err)
        })
}

module.exports.findOneQuote = (req, res) =>{

    console.log("*************", req.params.id)
    Quote.findOne({_id: req.params.id})
        .then(oneQuote=>{
            res.json({results: oneQuote})
        })
        .catch(err=>res.json(err))
}

module.exports.updateOneQuote = (req, res) =>{
    Quote.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true, runValidators: true})
        .then(updatedQuote =>{
            res.json({results: updatedQuote})
        })
        .catch(err=> res.json(err))
}

module.exports.deleteQuote = (req,res)=>{
    Quote.deleteOne({_id: req.params.id})
        .then(deletedQuote =>{
            res.json({results: deletedQuote})
        })
        .catch(err => res.json(err))
}