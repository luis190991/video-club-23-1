const express = require('express');
const Member = require('../models/member');

function list(req, res, next) {
  Member.find().then(objs => res.status(200).json({
    message: "Listado de socios",
    obj: objs
  })).catch(ex => res.status(500).json({
    message: "No se pudo mostrar los socios",
    obj:ex
  }));
}

function index(req, res, next) {
  res.send(`respond with a index= ${req.params.id}`);
}

function create(req, res, next) {
  let name = req.body.name;
  let lastName = req.body.lastName;
  let phone = req.body.phone;
  let address = new Object();
  address.street = req.body.street;
  address.number = req.body.number;
  address.zip = req.body.zip;
  address.state = req.body.state;

  let member = new Member({
    name: name,
    lastName: lastName,
    phone: phone,
    address: address
  });

  member.save().then(obj => res.status(200).json({
    message: "Socio creado correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: "No se pudo almacenar el socio",
    obj:ex
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
