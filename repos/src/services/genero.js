const db = require('../configs/pg')

// Sql
const cSql_get_all = 
    	`select id,
                nome,
                tipo,
                descricao,
                ativo
           from genero`

const cSql_post = 
        `insert into genero (id, nome, tipo, descricao, ativo)
                        values ($1, $2, $3, $4, $5)`

const cSql_delete = 
        `delete from genero where id = $1`

const cSql_updatePatch = 
        `update genero
            set`

const cSql_updatePut = 
        `update genero
            set nome      = $2,
                tipo  = $3,
                descricao  = $4,
                ativo = $5
          where id = $1`

// Métodos 
const getGenero = async(params) => {
    let genero = {}
    await db.query(cSql_get_all)
        .then(ret => genero = {total: ret.rows.length, livro:ret.rows})
        .catch(err => genero = err.stack)
    return genero
}

const postGenero = async(params) => {
    const {id, nome, tipo, descricao, ativo} = params
    await db.query(cSql_post, [id, nome, tipo, descricao, ativo])
}

const deleteGenero = async(params) => {
    const {id} = params
    await db.query(cSql_delete, [id])
}

const updatePatchGenero = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome){
        countParams++
        fields += ` nome = $${countParams}`
        binds.push(params.nome)
    }
    if (params.tipo){
        countParams++
        fields += ` tipo = $${countParams}`
        binds.push(params.tipo)
    }
    if (params.descricao){
        countParams++
        fields += ` descricao = $${countParams}`
        binds.push(params.descricao)
    }
    if (params.ativo){
        countParams++
        fields += ` ativo = $${countParams}`
        binds.push(params.ativo)
    }

    let Sql = cSql_updatePatch + fields + ` where id = $1`
    return await db.query(Sql, binds)
}

const updatePutGenero = async(params) => {
    const {id, nome, tipo, descricao, ativo} = params
    await db.query(cSql_updatePut, [id, nome, tipo, descricao, ativo])
}

// Exports
module.exports.getGenero = getGenero
module.exports.postGenero = postGenero
module.exports.deleteGenero = deleteGenero
module.exports.updatePatchGenero = updatePatchGenero
module.exports.updatePutGenero = updatePutGenero