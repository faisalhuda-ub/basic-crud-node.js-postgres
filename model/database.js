/*
 * Konfigurasi database yang akan digunakan oleh aplikasi
*/

var promise = require('bluebird');

var options = {
  // Inisialisasi untuk option
  promiseLib: promise
};

var pgp = require('pg-promise')(options);

var dbConfig = {
	"host" : "localhost",
	"port" : 5432,
	"database" : "akademik",
	"user" : "akaduser"
}
exports.db = pgp(dbConfig);