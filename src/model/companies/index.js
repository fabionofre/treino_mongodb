var express = require('express');

var router = express.Router();
var servPath = './services/';

router.post('/', require(servPath+'create'));
router.put('/:id', require(servPath+'update'))
router.get('/:id?', require(servPath+'find'));
router.delete('/:id', require(servPath+'remove'));

module.exports = router;