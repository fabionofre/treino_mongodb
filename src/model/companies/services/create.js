var Company = require('./../entity/Company')

var Service = function(req, res, next){

	var company = new Company(req.body);

	company
		.save()
		.then(function(company){
			if(!company){
				return res.status(404)
						  .json({
						  	status: false,
						  	data: {}
						  });
			}

			return res.status(200)
					  .json({
					  	status: true,
					  	data: company
					  });
		})
		.catch(function(err){
			return res.status(500)
					  .json({
					  	status: false,
					  	data: {
					  		error: err
					  	}
					  });
		});

};

module.exports = Service;