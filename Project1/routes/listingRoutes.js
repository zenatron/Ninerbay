const express = require('express');
const controller = require('../controllers/listingController');
const router = express.Router();
const {fileUpload} = require('../middleware/fileUpload')

router.get('/', controller.index);

router.get('/new', controller.new);

router.post('/', fileUpload,controller.create);

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.put('/:id', fileUpload,controller.update);

router.delete('/:id', controller.delete);

module.exports = router