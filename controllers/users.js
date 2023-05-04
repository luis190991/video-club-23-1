const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

function list(req, res, next) {
  res.send('respond with a list');
}

function index(req, res, next) {
  res.send(`respond with a index= ${req.params.id}`);
}

async function create(req, res, next) {
  let name = req.body.name;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  const salt = await bcrypt.genSalt(10);

  const passwordHash = await bcrypt.hash(password, salt);

  let user = new User({
    name:name,
    lastName: lastName,
    email: email,
    password:passwordHash,
    salt: salt
  });

  user.save().then(obj => res.status(200).json({
    message: "Usuario creado correctamente",
    obj: obj
  })).catch(ex => res.status(500).json({
    message: "No se pudo almacenar el usuario",
    obj: ex
  }));
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
