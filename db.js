const Sequelize = require('sequelize');

const directorModel = require('./models/director');

// 1) Nombre de la base de datos
// 2) Usuario de la base de datos
// 3) Contraseña de la base de datos
// 4) Objeto de configuracion del ORM

const sequelize = new Sequelize('video-club',
'root', 'secret', {
  host:'127.0.0.1',
  dialect:'mysql'
});

const Director = directorModel(sequelize, Sequelize);

sequelize.sync({
  force:true
}).then(()=>{
  console.log("Base de datos actualizada");
});

module.exports = { Director };
