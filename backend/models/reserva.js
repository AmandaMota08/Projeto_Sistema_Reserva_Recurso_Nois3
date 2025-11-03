const { truncate } = require('fs/promises');
const {DataTypes} = require ('sequelize');

module.exports = (sequelize)=>{
    return sequelize.define('Reserva',{
        recursoId:{type: DataTypes.INTEGER,allowNull: false},
        user:{type: DataTypes.STRING,allowNull: false},
        startAt:{type: DataTypes.INTEGER,allowNull: false},
        endAt:{type: DataTypes.DATE,allowNull: false},
        purpose:{type: DataTypes.STRING,allowNull: true},
        status:{type: DataTypes.STRING,allowNull: false, defaultValue: 'confirmed'} 
    },{
        tableName: 'reservas',
        timestamps: true
    });
};