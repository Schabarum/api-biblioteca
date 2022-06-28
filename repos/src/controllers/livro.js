const livro = require('../routes/livro')
let livroService = require('../services/livro')

const getLivro = async(req,res,next) => {
    try{
        await livroService.getLivro()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const postLivro = async(req, res, next) => {
    try{
        await livroService.postLivro(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const deleteLivro = async(req, res, next) => {
    try{
        await livroService.deleteLivro(req.params)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePatchLivro = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await livroService.updatePatchLivro(params)
            .then(ret => ret.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const updatePutLivro = async(req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await livroService.updatePutLivro(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

// exports
module.exports.postLivro = postLivro
module.exports.getLivro = getLivro
module.exports.deleteLivro = deleteLivro
module.exports.updatePatchLivro = updatePatchLivro
module.exports.updatePutLivro = updatePutLivro