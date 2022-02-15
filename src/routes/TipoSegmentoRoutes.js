const TipoSegmentoController = require('../controllers/TipoSegmentoController');

module.exports = (app) => {
    app.post('/intelbras/solar/tipo/segmento', TipoSegmentoController.post);
    app.get('/intelbras/solar/tipo/segmento', TipoSegmentoController.get);
    app.delete('/intelbras/solar/tipo/segmento/:id', TipoSegmentoController.delete);
    app.put('/intelbras/solar/tipo/segmento/:id', TipoSegmentoController.put);
    
}