const db = require('../configs/pg')

// Sql
const cSql_get_all = 
    	`select id,
                id_livro,
                id_estudante,
                data_reserva,
                semanas_locacao
           from locacao`

const cSql_post = 
        `insert into locacao (id, id_livro, id_estudante, data_reserva, semanas_locacao)
                        values ($1, $2, $3, $4, $5)`

const cSql_delete = 
        `delete from locacao where id = $1`

const cSql_updatePatch = 
        `update locacao
            set`

const cSql_updatePut = 
        `update locacao
            set id_livro        = $2,
                id_estudante    = $3,
                data_reserva    = $4,
                semanas_locacao = $5
          where id = $1`

// Métodos 
const getLocacao = async(params) => {
    let locacao = {}
    await db.query(cSql_get_all)
        .then(ret => locacao = {total: ret.rows.length, livro:ret.rows})
        .catch(err => locacao = err.stack)
    return locacao
}

const postLocacao = async(params) => {
    const {id, id_livro, id_estudante, data_reserva, semanas_locacao} = params
    await db.query(cSql_post, [id, id_livro, id_estudante, data_reserva, semanas_locacao])
}

const deleteLocacao = async(params) => {
    const {id} = params
    await db.query(cSql_delete, [id])
}

const updatePatchLocacao = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.id_livro){
        countParams++
        fields += ` id_livro = $${countParams}`
        binds.push(params.id_livro)
    }
    if (params.id_estudante){
        countParams++
        fields += ` id_estudante = $${countParams}`
        binds.push(params.id_estudante)
    }
    if (params.data_reserva){
        countParams++
        fields += ` data_reserva = $${countParams}`
        binds.push(params.data_reserva)
    }
    if (params.semanas_locacao){
        countParams++
        fields += ` semanas_locacao = $${countParams}`
        binds.push(params.semanas_locacao)
    }

    let Sql = cSql_updatePatch + fields + ` where id = $1`
    return await db.query(Sql, binds)
}

const updatePutLocacao = async(params) => {
    const {id, id_livro, id_estudante, data_reserva, semanas_locacao} = params
    await db.query(cSql_updatePut, [id, id_livro, id_estudante, data_reserva, semanas_locacao])
}

// Exports
module.exports.getLocacao = getLocacao
module.exports.postLocacao = postLocacao
module.exports.deleteLocacao = deleteLocacao
module.exports.updatePatchLocacao = updatePatchLocacao
module.exports.updatePutLocacao = updatePutLocacao