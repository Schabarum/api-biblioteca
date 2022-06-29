let estudanteService = require('../services/estudante')

const getEstudante = async(req,res,next) => {
    try{
        await estudanteService.getEstudante()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const postEstudante = async(req, res, next) => {
    try{
        await estudanteService.postEstudante(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const deleteEstudante = async(req, res, next) => {
    try{
        await estudanteService.deleteEstudante(req.params)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePatchEstudante = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await estudanteService.updatePatchEstudante(params)
            .then(ret => ret.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePutEstudante = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await estudanteService.updatePutEstudante(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

// exports
module.exports.postEstudante = postEstudante
module.exports.getEstudante = getEstudante
module.exports.deleteEstudante = deleteEstudante
module.exports.updatePatchEstudante = updatePatchEstudante
module.exports.updatePutEstudante = updatePutEstudante