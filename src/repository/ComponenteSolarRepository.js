const db = require('../db');

async function create(componente) {
    const result = await db.query(
        `INSERT INTO componenteSolar 
        (nome, altura, profundidade, largura, dataCriacao, idSegmento, idGrupoComponente, pesoBruto, pesoLiquido) 
        VALUES 
        ('${componente.nome}',  ${componente.altura}, ${componente.profundidade}, ${componente.largura}, now(), ${componente.idSegmento}, ${componente.idGrupoComponente}, ${componente.pesoBruto}, ${componente.pesoLiquido});`
    );

    let message = 'Erro ao executar operação!';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function update(id, componente) {
    const result = await db.query(
        `update componenteSolar set nome = '${componente.nome}', profundidade =  ${componente.profundidade},
        largura = ${componente.largura}, altura = ${componente.altura}, idSegmento = ${componente.idSegmento}, 
        idGrupoComponente = ${componente.idGrupoComponente}, pesoBruto = ${componente.pesoBruto}, pesoLiquido = ${componente.pesoLiquido} where id = ${id};`
    );

    let message = 'Erro ao executar operação!';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function del(id) {
    const result = await db.query(
        `delete from componenteSolar where id = ${id};`
    );

    let message = 'Erro ao executar operação!';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function get(id) {
    const result = await db.query(
        `select * from componenteSolar where id = ${id};`
    );

    let message = 'Erro ao executar operação!';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return result;
}

async function getAll() {
    const result = await db.query(
        `select * from componenteSolar;`
    );

    let message = 'Erro ao executar operação!';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return result;
}

module.exports = {
    create,
    update,
    del,
    get,
    getAll
}