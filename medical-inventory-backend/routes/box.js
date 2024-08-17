const express = require('express');
const { getBoxInventory, updateBoxInventory } = require('../controllers/boxController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();

router.get('/:id/inventory', authMiddleware, getBoxInventory);
router.post('/:id/inventory', authMiddleware, updateBoxInventory);

module.exports = router;
