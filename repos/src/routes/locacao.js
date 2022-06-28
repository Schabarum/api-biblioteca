const locacaoController = require('../controllers/locacao')

module.exports = (app) => {
    app.get('/locacao', locacaoController.getLocacao)
    app.post('/locacao', locacaoController.postLocacao)
    app.detele('/locacao/:id', locacaoController.deleteLocacao)
    app.patch('/locacao/:id', locacaoController.updatePatchLocacao)
    app.put('/locacao/:id', locacaoController.updatePutLocacao)
}