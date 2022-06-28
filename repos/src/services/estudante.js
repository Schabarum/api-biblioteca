const db = require('../configs/pg')

// Sql
const cSql_get_all = 
    	`select id,
                nome,
                endereco,
                telefone,
                bloqueado
           from estudante`

const cSql_post = 
        `insert into estudante (id, nome, endereco, telefone, bloqueado)
                        values ($1, $2, $3, $4, $5)`

const cSql_delete = 
        `delete from estudante where id = $1`

const cSql_updatePatch = 
        `update estudante
            set`

const cSql_updatePut = 
        `update estudante
            set nome      = $2,
                endereco  = $3,
                telefone  = $4,
                bloqueado = $5
          where id = $1`

// Métodos 
const getEstudante = async(params) => {
    let estudante = {}
    await db.query(cSql_get_all)
        .then(ret => estudante = {total: ret.rows.length, livro:ret.rows})
        .catch(err => estudante = err.stack)
    return estudante
}

const postEstudante = async(params) => {
    const {id, nome, endereco, telefone, bloqueado} = params
    await db.query(cSql_post, [id, nome, endereco, telefone, bloqueado])
}

const deleteEstudante = async(params) => {
    const {id} = params
    await db.query(cSql_delete, [id])
}

const updatePatchEstudante = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome){
        countParams++
        fields += ` nome = $${countParams}`
        binds.push(params.nome)
    }
    if (params.endereco){
        countParams++
        fields += ` endereco = $${countParams}`
        binds.push(params.endereco)
    }
    if (params.telefone){
        countParams++
        fields += ` telefone = $${countParams}`
        binds.push(params.telefone)
    }
    if (params.bloqueado){
        countParams++
        fields += ` bloqueado = $${countParams}`
        binds.push(params.bloqueado)
    }

    let Sql = cSql_updatePatch + fields + ` where id = $1`
    return await db.query(Sql, binds)
}

const updatePutEstudante = async(params) => {
    const {id, nome, endereco, telefone, bloqueado} = params
    await db.query(cSql_updatePut, [id, nome, endereco, telefone, bloqueado])
}

// Exports
module.exports.getEstudante = getEstudante
module.exports.postEstudante = postEstudante
module.exports.deleteEstudante = deleteEstudante
module.exports.updatePatchEstudante = updatePatchEstudante
module.exports.updatePutEstudante = updatePutEstudante