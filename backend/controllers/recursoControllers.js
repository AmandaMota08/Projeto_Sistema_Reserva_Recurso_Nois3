//Importar o model recurso
const { Router } = require('express');
const {Recurso} = require('../models');

//ControLLer para manipular operações relacionadas a Recursos
const recursoController = {
    @route //GET/opi/recursos
    @desc //Listar todos os recursos
    @access //Public

    async listarTodos(req,res){
        try{
            const recursos = await Recurso.findAll({
                order: [['nome','ASC']]
            });
            res.status(200).json(recursos)
        }
    }
}