const livro = require('./livro')
const estudante = require('./estudante')
const locacao = require('./locacao')
const funcionario = require('./funcionario')
const genero = require('./genero')

module.exports = (app) => {
    livro(app)
    estudante(app)
    locacao(app)
    funcionario(app)
    genero(app)
}