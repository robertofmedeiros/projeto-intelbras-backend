const GrupoComponenteController = require('../controllers/GrupoComponenteController');

module.exports = (app) => {
    app.post('/intelbras/solar/grupo/componente', GrupoComponenteController.post);
    app.get('/intelbras/solar/grupo/componente', GrupoComponenteController.get);
    app.delete('/intelbras/solar/grupo/componente/:id', GrupoComponenteController.delete);
    app.put('/intelbras/solar/grupo/componente/:id', GrupoComponenteController.put);
    
}