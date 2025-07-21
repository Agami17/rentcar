const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/admin', (req, res) => {
  res.render('admin_login');
});

module.exports = router;
