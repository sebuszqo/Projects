const express = require('express');
const {db} = require("../utils/db");
const clientRouter = express.Router();

module.exports = {
    clientRouter,
}
clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll(),
        })
    })
    .get('/:id', (req, res) => {
        const {id} = req.params;
        res.render('client/one', {
            client: db.getOne(`${id}`)
        })
    })
    .post('/', (req, res) => {
        const id = db.create(req.body)
        res.redirect(`/clients/${id}`);
    })
    .put('/:id', (req, res) => {
        const {id} = req.params;
        db.update(id, req.body)
        res.redirect(`/clients/${id}`)
    })
    .delete('/:id', (req, res) => {
        db.delete(req.params.id)
        res.redirect('/')
    })
    .get('/form/edit/:id', (req, res) => {
        res.render('client/forms/edit', {
            client: db.getOne(`${req.params.id}`)
        })
    })
    .get('/add/form', (req, res) => {
        res.render('client/forms/add');
    })
