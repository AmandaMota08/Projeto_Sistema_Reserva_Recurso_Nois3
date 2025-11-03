const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: process.env.DB_PATH || path.join(_dirname,'--','--','database.sqlite'),
        logging: false
    });
const Recurso = require ('./recurso.js');
const Reserva = require ('./reserva.js');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

// Associações: um recurso tem muitas reservas
Recurso.hasMany(Reserva,{as:'reservas',ForeignKey:'recursoId', onDelete: 'CASCADE'});
Reserva.belongsTo(Recurso,{as:'recursos',ForeignKey: 'recursoId'});

module.exports = {sequelize,Recurso,Reserva};