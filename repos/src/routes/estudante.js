const estudanteController = require('../controllers/estudante')

module.exports = (app) => {
    app.get('/estudante', estudanteController.getEstudante)
    app.post('/estudante', estudanteController.postEstudante)
    app.detele('/estudante/:id', estudanteController.deleteEstudante)
    app.patch('/estudante/:id', estudanteController.updatePatchEstudante)
    app.put('/estudante/:id', estudanteController.updatePutEstudante)
}