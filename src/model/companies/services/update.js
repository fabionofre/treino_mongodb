var Company = require('./../entity/Company');


var Service = function(req, res, next){
	var update = Company.update({
		_id: req.params.id
	}, {
		$set: req.body
	}, {multi: false}).exec();

	update
		.then(function(result){
			if(!result){
				return res.status(400)
							.json({
								status: false,
								data: {}
							});
			}

			return res.status(200)
						.json({
							status: true,
							data: result
						});
		})
		.catch(function(err){
			return rest.status(500)
						.json({
							status: false,
							data: {}
						});
		});
}

module.exports = Service;