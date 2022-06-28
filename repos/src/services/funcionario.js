const db = require('../configs/pg')

// Sql
const cSql_get_all = 
    	`select id,
                nome,
                inicio,
                funcao,
                ativo
           from funcionario`

const cSql_post = 
        `insert into funcionario (id, nome, inicio, funcao, ativo)
                        values ($1, $2, $3, $4, $5)`

const cSql_delete = 
        `delete from funcionario where id = $1`

const cSql_updatePatch = 
        `update funcionario
            set`

const cSql_updatePut = 
        `update funcionario
            set nome      = $2,
                inicio  = $3,
                funcao  = $4,
                ativo = $5
          where id = $1`

// Métodos 
const getFuncionario = async(params) => {
    let funcionario = {}
    await db.query(cSql_get_all)
        .then(ret => funcionario = {total: ret.rows.length, livro:ret.rows})
        .catch(err => funcionario = err.stack)
    return funcionario
}

const postFuncionario = async(params) => {
    const {id, nome, inicio, funcao, ativo} = params
    await db.query(cSql_post, [id, nome, inicio, funcao, ativo])
}

const deleteFuncionario = async(params) => {
    const {id} = params
    await db.query(cSql_delete, [id])
}

const updatePatchFuncionario = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome){
        countParams++
        fields += ` nome = $${countParams}`
        binds.push(params.nome)
    }
    if (params.inicio){
        countParams++
        fields += ` inicio = $${countParams}`
        binds.push(params.inicio)
    }
    if (params.funcao){
        countParams++
        fields += ` funcao = $${countParams}`
        binds.push(params.funcao)
    }
    if (params.ativo){
        countParams++
        fields += ` ativo = $${countParams}`
        binds.push(params.ativo)
    }

    let Sql = cSql_updatePatch + fields + ` where id = $1`
    return await db.query(Sql, binds)
}

const updatePutFuncionario = async(params) => {
    const {id, nome, inicio, funcao, ativo} = params
    await db.query(cSql_updatePut, [id, nome, inicio, funcao, ativo])
}

// Exports
module.exports.getFuncionario = getFuncionario
module.exports.postFuncionario = postFuncionario
module.exports.deleteFuncionario = deleteFuncionario
module.exports.updatePatchFuncionario = updatePatchFuncionario
module.exports.updatePutFuncionario = updatePutFuncionario