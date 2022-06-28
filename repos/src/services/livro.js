const db = require('../configs/pg')

// Sql
const cSql_get_all = 
    	`select id,
                nome,
                aquisicao,
                editora,
                assunto
           from livro`

const cSql_post = 
        `insert into livro (id, nome, aquisicao, editora, assunto)
                    values ($1, $2, $3, $4, $5)`

const cSql_delete = 
        `delete from livro where id = $1`

const cSql_updatePatch = 
        `update livro
            set`

const cSql_updatePut = 
        `update livro
            set nome      = $2,
                aquisicao = $3,
                editora   = $4,
                assunto   = $5
          where id = $1`

// Métodos 
const getLivro = async(params) => {
    let livro = {}
    await db.query(cSql_get_all)
        .then(ret => livro = {total: ret.rows.length, livro:ret.rows})
        .catch(err => livro = err.stack)
    return livro
}

const postLivro = async(params) => {
    const {id, nome, aquisicao, editora, assunto} = params
    await db.query(cSql_post, [id, nome, aquisicao, editora, assunto])
}

const deleteLivro = async(params) => {
    const {id} = params
    await db.query(cSql_delete, [id])
}

const updatePatchLivro = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome){
        countParams++
        fields += ` nome = $${countParams}`
        binds.push(params.nome)
    }
    if (params.aquisicao){
        countParams++
        fields += ` aquisicao = $${countParams}`
        binds.push(params.aquisicao)
    }
    if (params.editora){
        countParams++
        fields += ` editora = $${countParams}`
        binds.push(params.editora)
    }
    if (params.assunto){
        countParams++
        fields += ` assunto = $${countParams}`
        binds.push(params.assunto)
    }

    let Sql = cSql_updatePatch + fields + ` where id = $1`
    return await db.query(Sql, binds)
}

const updatePutLivro = async(params) => {
    const {id, nome, aquisicao, editora, assunto} = params
    await db.query(cSql_updatePut, [id, nome, aquisicao, editora, assunto])
}

// Exports
module.exports.getLivro = getLivro
module.exports.postLivro = postLivro
module.exports.deleteLivro = deleteLivro
module.exports.updatePatchLivro = updatePatchLivro
module.exports.updatePutLivro = updatePutLivro