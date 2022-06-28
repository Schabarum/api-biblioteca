const locacao = require('../routes/locacao')
let locacaoService = require('../services/locacao')

const getLocacao = async(req,res,next) => {
    try{
        await locacaoService.getLocacao()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const postLocacao = async(req, res, next) => {
    try{
        await locacaoService.postLocacao(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const deleteLocacao = async(req, res, next) => {
    try{
        await locacaoService.deleteLocacao(req.params)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePatchLocacao = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await locacaoService.updatePatchLocacao(params)
            .then(ret => ret.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePutLocacao = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await locacaoService.updatePutLocacao(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

// exports
module.exports.postLocacao = postLocacao
module.exports.getLocacao = getLocacao
module.exports.deleteLocacao = deleteLocacao
module.exports.updatePatchLocacao = updatePatchLocacao
module.exports.updatePutLocacao = updatePutLocacao