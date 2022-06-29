const funcionarioController = require('../controllers/funcionario')

module.exports = (app) => {
    app.get('/funcionario', funcionarioController.getFuncionario)
    app.post('/funcionario', funcionarioController.postFuncionario)
    app.delete('/funcionario/:id', funcionarioController.deleteFuncionario)
    app.patch('/funcionario/:id', funcionarioController.updatePatchFuncionario)
    app.put('/funcionario/:id', funcionarioController.updatePutFuncionario)
}