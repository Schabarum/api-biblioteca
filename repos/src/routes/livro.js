const livroController = require('../controllers/livro')

module.exports = (app) => {
    app.get('/livro', livroController.getLivro)
    app.post('/livro', livroController.postLivro)
    app.delete('/livro/:id', livroController.deleteLivro)
    app.patch('/livro/:id', livroController.updatePatchLivro)
    app.put('/livro/:id', livroController.updatePutLivro)
}