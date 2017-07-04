# Project sederhana untuk web service berbasis restful API menggunakan Node.js dan Postgres

## Project ini tentang operasi CRUD (create, read, update, dan delete) sederhana

Database yang digunakan bernama akademik yang hanya memiliki satu tabel bernama mahasiswa yg terdiri dari 5 atribut
- nim berupa serial
- nama berupa varchar
- alamat berupa varchar
- umur berupa integer
- gender berupa varchar

Faktor keamanan tidak masuk dalam pengembangan sistem ini dikarenakan untuk menjaga kesederhanaan code, sehingga memudahkan
untuk pemahamanan.

## Langkah-langkah untuk menjalankan project ini sebagai berikut

1. Download/fork/clone project ini
2. Masuk ke direktori project (cmd pada windows/ terminal pada mac)
3. Install dependencies yang diperlukan dengan perintah -> `npm install`
4. Memasang database yang sudah include pada file project dengan perintah  -> `psql -U postgres -f akademik.sql`
5. Jalankan server dengan perintah -> `npm start`
