const express = require('express');
const { Director } = require('../db');

function list(req, res, next) {
  Director.findAll()
          .then(objects => res.json(objects))
          .catch(err => res.send(error));
}

function index(req, res, next) {
  res.send(`respond with a index= ${req.params.id}`);
}

function create(req, res, next) {
  let name = req.body.name;
  let lastName = req.body.lastName;

  let director = new Object({
    name:name,
    lastName:lastName
  });

  Director.create(director)
          .then(obj => res.json(obj))
          .catch(err => res.json(err));
}

function replace(req, res, next) {
  res.send(`respond with a replace = ${req.params.id}`);
}

function update(req, res, next) {
  res.send(`respond with a update = ${req.params.id}`);
}

function destroy(req, res, next) {
  res.send(`respond with a destroy = ${req.params.id}`);
}

module.exports = { list, index, create, replace, update, destroy };
