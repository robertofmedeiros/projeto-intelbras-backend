const IntelbrasController = require('../controllers/ComponenteController');

module.exports = (app) => {
    app.post('/intelbras/solar/componente', IntelbrasController.post);
    app.get('/intelbras/solar/componente', IntelbrasController.get);
    app.delete('/intelbras/solar/componente/:id', IntelbrasController.delete);
    app.put('/intelbras/solar/componente/:id', IntelbrasController.put);
    
}