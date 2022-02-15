const componenteSolarRepository = require('../repository/ComponenteSolarRepository');

exports.post = async (req, res, next) => {

    try {
        console.log(req.body);
        let retorno = await componenteSolarRepository.create(req.body);

        res.status(201).send(retorno); 
    } catch (err) {
        console.error(`Erro ao conectar com o banco`, err.message);
        next(err);
    }
};

exports.put = async (req, res, next) => {
    let id = req.params.id;
    try {
        console.log(req.body);
        let retorno = await componenteSolarRepository.update(id, req.body);

        res.status(201).send(retorno); 
    } catch (err) {
        console.error(`Erro ao conectar com o banco`, err.message);
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    let id = req.params.id;

    try {
        console.log(req.body);
        let retorno = await componenteSolarRepository.del(req.params.id);

        res.status(200).send(retorno); 
    } catch (err) {
        console.error(`Erro ao conectar com o banco`, err.message);
        next(err);
    }

    res.status(500).send(`ERRO ao deletar componente! --> ${id}`);
};

exports.get = async (req, res, next) => {
    try {
        let retorno = await componenteSolarRepository.getAll();

        res.status(200).send(retorno); 
    } catch (err) {
        console.error(`Erro ao conectar com o banco`, err.message);
        next(err);
    }
};

exports.getById = async (req, res, next) => {
    let id = req.params.id;

    try {
        console.log(req.body);
        let retorno = await componenteSolarRepository.get(req.params.id);

        res.status(200).send(retorno); 
    } catch (err) {
        console.error(`Erro ao conectar com o banco`, err.message);
        next(err);
    }

    res.status(500).send(`Erro ao consultar componente! ${id}`);
};