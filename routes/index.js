var express = require('express');
var router = express.Router();
var db = require('../model/queries');

// alamat routing untuk mengakses setiap layanan pada web

router.get('/api/students', db.getAllStudents);
router.get('/api/students/:nim', db.getSingleStudent);
router.post('/api/students', db.createStudent);
router.put('/api/students/:nim', db.updateStudent);
router.put('/api/studentsupdate/', db.updateStudentBody);
router.delete('/api/students/:nim', db.removeStudent);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'Restful API untuk CRUD data mahasiswa'});
    // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
