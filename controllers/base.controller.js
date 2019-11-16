const createError = require('http-errors');
const mongoose = require('mongoose');
const Celebrities = require('../models/celebrity')

module.exports.base = (req, res, next) => {
    res.render('index', {
        title: 'Welcome to your CRUD project'
    });
};

module.exports.listCelebrities = (req, res, next) => {
    Celebrities.find()
        .then(
            celebrities => {
                res.render('celebrities/index', { celebrities })
            }
        ).catch(
            error => next(error)
        );
};

module.exports.detailCelebrities = (req, res, next) => {
    
    const id = req.params.id
    
        Celebrities.findById(id)
            .then(
                celebrities => {
                    console.log(`${JSON.stringify(celebrities)}`)
                    res.render('celebrities/show', {celebrities})
                }
            ).catch(
                error => next (error)
            );
};

module.exports.create = (req, res, next) => {


};