var Company = require('./../entity/Company');

var Service = function(req, res){
	var find = {};

	if(req.params.id){
		find = Company.findById(req.params.id).exec();
	}

	if(!req.params.id){
		find = Company.find({}).exec();
	}
	
	find
		.then(function(result){
			if(!result){
				res.status(404)
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
			return res.status(500)
				.json({
					status: false,
					data: {}
				})
		});

};

module.exports = Service;