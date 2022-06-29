const generoController = require('../controllers/genero')

module.exports = (app) => {
    app.get('/genero', generoController.getGenero)
    app.post('/genero', generoController.postGenero)
    app.delete('/genero/:id', generoController.deleteGenero)
    app.patch('/genero/:id', generoController.updatePatchGenero)
    app.put('/genero/:id', generoController.updatePutGenero)
}