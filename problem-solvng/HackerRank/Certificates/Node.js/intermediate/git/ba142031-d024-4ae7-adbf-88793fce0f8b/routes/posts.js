const express = require('express');
const router = express.Router();
const { postsController, getController, getByIdController } = require('../controllers/posts');

router.post('/', postsController);
router.get('/', getController);
router.get('/:id', getByIdController);

module.exports = router;
