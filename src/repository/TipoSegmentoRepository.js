const db = require('../db');

async function create(grupo) {
    const result = await db.query(
        `INSERT INTO tipoSegmento 
        (nome, dataCriacao) 
        VALUES 
        ('${grupo.nome}', now());`
    );

    let message = 'Erro ao conectar com o banco';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function update(id, componente) {
    const result = await db.query(
        `update tipoSegmento set nome = '${componente.nome}' where id = ${id};`
    );

    let message = 'Erro ao conectar com o banco';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function del(id) {
    const result = await db.query(
        `delete from tipoSegmento where id = ${id};`
    );

    let message = 'Erro ao conectar com o banco';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function get(id) {
    const result = await db.query(
        `select * from tipoSegmento where id = ${id};`
    );

    let message = 'Erro ao conectar com o banco';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return result;
}

async function getAll() {
    const result = await db.query(
        `select * from tipoSegmento;`
    );

    let message = 'Erro ao conectar com o banco';

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