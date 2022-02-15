const mysql = require("mysql2/promise");

async function query(sql, params) {

    const connection = await mysql.createConnection("mysql://root:1234@localhost:3306/projeto-intelbras");
    console.log("Conectou no MySQL!");

    const [results,] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}