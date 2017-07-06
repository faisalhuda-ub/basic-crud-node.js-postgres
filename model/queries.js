var config = require('./database');

/*
Fungsi untuk mendapatkan seluruh data dari tabel mahasiswa.
menggunakan fungsi "any" karena akan mengembalikan berapapun
data yang ada di tabel mahasiswa
*/
function getAllStudents(req, res, next) {
  config.db.any('select * from mahasiswa')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Semua data mahasiswa berhasil didapatkan'
        });
    })
    .catch(function (err) {
      return next(err);
    });

  // config.db.any('select * from mahasiswa orderby nim desc');
}

/*
Fungsi untuk mendapatkan data mahasiswa tertentu sesuai dengan
nim yang dimasukkan pada parameter url. Menggunakan fungsi 
*/
function getSingleStudent(req, res, next) {
  var studentID = parseInt(req.params.nim);
  config.db.one('select * from mahasiswa where nim = $1', studentID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Data mahasiswa tersebut berhasil didapatkan'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/*
Fungsi untuk operasi membuat data mahasiswa baru
*/
function createStudent(req, res, next) {
  req.body.umur = parseInt(req.body.umur);
  db.none('insert into mahasiswa(nama, alamat, umur, gender)' +
      'values(${nama}, ${alamat}, ${umur}, ${gender})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Berhasil menambahkan data mahasiswa baru'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/*
Fungsi untuk memperbarui data mahasiswa berdasarkan nim yang
didapatkan dari parameter nim pada url 
*/
function updateStudent(req, res, next) {
  db.none('update mahasiswa set nama=$1, alamat=$2, umur=$3, gender=$4 where nim=$5',
    [req.body.nama, req.body.alamat, parseInt(req.body.umur),
      req.body.gender, parseInt(req.params.nim)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Data mahasiswa berhasil diperbarui (metode params)'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/*
Sama dengan fungsi updateStudent hanya saja nim didapatan dari body 
*/
function updateStudentBody(req, res, next) {
  db.none('update  mahasiswa set nama=$1, alamat=$2, umur=$3, gender=$4 where nim=$5',
    [req.body.nama, req.body.alamat, parseInt(req.body.umur),
      req.body.gender, parseInt(req.body.nim)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Data mahasiswa berhasil diperbarui (metode body)'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/*
Menghapus data user berdasarkan parameter nim yang ada pada url
*/
function removeStudent(req, res, next) {
  var nim = parseInt(req.params.nim);
  db.result('delete from mahasiswa where nim = $1', nim)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Berhasil menghapus data mahasiswa pada baris ke ${result.rowCount}`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

/*
Daftar fungsi yang diexport untuk digunakan di module yang lain
*/
module.exports = {
  getAllStudents: getAllStudents,
  getSingleStudent: getSingleStudent,
  createStudent: createStudent,
  updateStudent: updateStudent,
  updateStudentBody: updateStudentBody,
  removeStudent: removeStudent
};
