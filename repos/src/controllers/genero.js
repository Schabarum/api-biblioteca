let generoService = require('../services/genero')

const getGenero = async(req,res,next) => {
    try{
        await generoService.getGenero()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const postGenero = async(req, res, next) => {
    try{
        await generoService.postGenero(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const deleteGenero = async(req, res, next) => {
    try{
        await generoService.deleteGenero(req.params)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePatchGenero = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await generoService.updatePatchGenero(params)
            .then(ret => ret.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePutGenero = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await generoService.updatePutGenero(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

// exports
module.exports.postGenero = postGenero
module.exports.getGenero = getGenero
module.exports.deleteGenero = deleteGenero
module.exports.updatePatchGenero = updatePatchGenero
module.exports.updatePutGenero = updatePutGenero