const IntelbrasRoutes = require('./ComponenteRoutes');
const GrupoRoutes = require('./GrupoComponenteRoutes');
const TipoSegmentoRoutes = require('./TipoSegmentoRoutes');

module.exports = (app) => {
    IntelbrasRoutes(app)
    GrupoRoutes(app)
    TipoSegmentoRoutes(app)
}