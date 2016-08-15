var mongoose = require('mongoose');

var _createConnection = function(ip, banco){
	var db;
	if(ip && banco)
		db = mongoose.connect('mongodb://'+ip+'/'+banco).connection;
	else
		db = mongoose.connect('mongodb://localhost/react').connection;
	db.on('connected', function(){
		console.log('Mongodb Conectado a '+ip+'/'+banco);
	});
	db.on('error', function(){
		console.log('Conexão não estabelecida!');
	})

	return db;
}

module.exports = {

	createConnection: _createConnection

}