const funcionario = require('../routes/funcionario')
let funcionarioService = require('../services/funcionario')

const getFuncionario = async(req,res,next) => {
    try{
        await funcionarioService.getFuncionario()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const postFuncionario = async(req, res, next) => {
    try{
        await funcionarioService.postFuncionario(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const deleteFuncionario = async(req, res, next) => {
    try{
        await funcionarioService.deleteFuncionario(req.params)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePatchFuncionario = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await funcionarioService.updatePatchFuncionario(params)
            .then(ret => ret.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePutFuncionario = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await funcionarioService.updatePutFuncionario(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

// exports
module.exports.postFuncionario = postFuncionario
module.exports.getFuncionario = getFuncionario
module.exports.deleteFuncionario = deleteFuncionario
module.exports.updatePatchFuncionario = updatePatchFuncionario
module.exports.updatePutFuncionario = updatePutFuncionario