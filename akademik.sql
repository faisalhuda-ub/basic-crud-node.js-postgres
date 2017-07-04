DROP DATABASE IF EXISTS akademik;
CREATE DATABASE akademik;

\connect akademik;

CREATE TABLE mahasiswa (
  nim SERIAL PRIMARY KEY,
  nama VARCHAR,
  alamat VARCHAR,
  umur INTEGER,
  gender VARCHAR
);

INSERT INTO mahasiswa (nama, alamat, umur, gender) VALUES ('Ani', 'Malang', 17, 'F');
INSERT INTO mahasiswa (nama, alamat, umur, gender) VALUES ('Budi', 'Singosari', 18, 'M');
INSERT INTO mahasiswa (nama, alamat, umur, gender) VALUES ('Cinta', 'Lawang', 19, 'F');