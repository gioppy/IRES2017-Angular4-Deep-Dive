const express = require('express');
const router = express.Router();

const AssistanceController = require('../controllers/assistance');

router.get('/', AssistanceController.assistanceIndex);
router.get('/:aid', AssistanceController.assistanceRetrieve);
router.post('/', AssistanceController.assistanceCreate);
router.patch('/:aid', AssistanceController.assistanceUpdate);
router.delete('/:aid', AssistanceController.assistanceDelete);

module.exports = router;