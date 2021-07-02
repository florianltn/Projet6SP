const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.like);
router.get('/', auth, sauceCtrl.getAllSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, sauceCtrl.modifyOne);
router.delete('/:id', auth, sauceCtrl.deleteOne);

module.exports = router;