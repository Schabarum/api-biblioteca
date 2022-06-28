const swaggerAutogen = require('swagger-autogen')('pt-br')

const doc = {
    info: {
        version: "1.0.0",
        title: "API BIBLIOTECA HORUS",
        description: "Documentação das API's da Biblioteca Horus"
    },
    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
}

const outPutFile = './src/docs/swagger.yaml';
const endPointsFiles = ['./src/routes/livro.js',
                        './src/routes/locacao.js',
                        './src/routes/genero.js',
                        './src/routes/funcionario.js',
                        './src/routes/estudante.js'];

swaggerAutogen(outPutFile, endPointsFiles, doc)