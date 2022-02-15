const db = require('../db');

async function create(grupo) {
    const result = await db.query(
        `INSERT INTO grupoComponente 
        (nome, dataCriacao) 
        VALUES 
        ('${grupo.nome}', now());`
    );

    let message = 'Erro ao executar operação!';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function update(id, componente) {
    const result = await db.query(
        `update grupoComponente set nome = '${componente.nome}' where id = ${id};`
    );

    let message = 'Erro ao executar operação!';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function del(id) {
    const result = await db.query(
        `delete from grupoComponente where id = ${id};`
    );

    let message = 'Erro ao executar operação!';

    if (result.affectedRows) {
        message = 'Operação realizada com sucesso!';
    }

    return { message };
}

async function get(id) {
    const result = await db.query(
        `select * from grupoComponente where id = ${id};`
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
    get
}