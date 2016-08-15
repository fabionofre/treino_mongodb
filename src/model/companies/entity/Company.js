var mongoose = require('mongoose');
// var db = require('./../Db.js');

// var _db = db.createConnection();

var _company = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		name: String,
		number: Number,
		city: String,
	},
	date: {
		type: Date,
		default: new Date()
	}
});


// var _Company = mongoose.model('Company', _company);

// var _createCompany = function(company){
// 	_Company.create(company, function(err, company){
// 		if(err){
// 			console.log('Error: '+err);
// 			return _db.close();
// 		}
// 		console.log('Created => '+company);
// 		return _db.close();
// 	}); 

	

// }

module.exports = mongoose.model('Company', _company);;