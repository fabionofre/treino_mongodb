

module.exports = function (app) {
	app.use('/company', require('./src/model/companies'));
	 require('rotas/routerConfig')(app);
}