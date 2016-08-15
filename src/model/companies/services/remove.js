var Company = require('./../entity/Company');

var Service = function(req, res, next){

	var remove = Company.remove({
		_id: req.params.id
	}).exec();

	remove
		.then(function(result){
			return res.status(200)
						.json({
							status: true,
							data: result
						})
		})	
		.catch(function(err){
			return res.status(500)
						.json({
							status: false,
							data: {}
						})
		});

};

module.exports = Service;