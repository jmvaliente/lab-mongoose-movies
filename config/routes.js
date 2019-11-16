const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');

router.get('/', controller.base);
router.get('/celebrities',controller.listCelebrities);
router.get('/celebrities/:id',controller.detailCelebrities);
router.get('/celebrities/new',controller.create);
//router.post('/celebrities/new',controller.doCreate);

module.exports = router;