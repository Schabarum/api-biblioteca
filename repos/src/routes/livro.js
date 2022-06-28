const livroController = require('../controllers/livro')

module.exports = (app) => {
    app.get('/livro', livroController.getLivro)
    app.post('/livro', livroController.postLivro)
    app.detele('/livro/:id', livroController.deleteLivro)
    app.patch('/livro/:id', livroController.updatePatchLivro)
    app.put('/livro/:id', livroController.updatePutLivro)
}