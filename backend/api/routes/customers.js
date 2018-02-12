const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/repository/images/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '__' + file.originalname)
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2
  },
  fileFilter: fileFilter
});

const CustomersController = require('../controllers/customers');

router.get('/', CustomersController.ClientsIndex);
router.get('/:cid', CustomersController.clientsRetrieve);
router.post('/', upload.single('image'), CustomersController.clientsCreate);
router.delete('/:cid', CustomersController.clientsDelete);
router.patch('/:cid', upload.single('image'), CustomersController.clientsUpdate);

module.exports = router;