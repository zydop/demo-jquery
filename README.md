# Screenshoot

![](./Screenshot(1).png)
![](./Screenshot(2).png)

## Deskripsi

Kode ini merupakan implementasi sebuah formulir (Form A) dengan kemampuan pengiriman data ke sisi server (B) secara asinkron menggunakan AJAX jQuery dengan metode HTTP "POST". Saat formulir dikirimkan, halaman tidak akan berpindah ke dokumen PHP yang terpisah. Data yang dikirimkan ke server akan diproses oleh kode program PHP (B) untuk membentuk sebuah array dengan jumlah elemen sesuai dengan angka yang diberikan. Setiap elemen array akan memiliki nilai yang terdiri dari teks yang diinputkan ditambah dengan nomor index array-nya. Setelah itu, array tersebut dikembalikan ke client sebagai respons permintaan dalam format JSON dengan menggunakan fungsi `json_encode()` pada PHP. Dokumen JSON yang diterima oleh Form A kemudian diubah menjadi bentuk array menggunakan fungsi `JSON.parse()`. Array yang diperoleh kemudian ditampilkan dalam bentuk tabel yang diletakkan di bawah formulir menggunakan jQuery. Proses penampilan tabel ini juga dianimasikan dengan menggunakan jQuery.

## Instruksi

1. Buka file `A.html` pada browser.
2. Isi input "Number" dengan angka yang diinginkan.
3. Isi input "Text" dengan teks yang diinginkan.
4. Klik tombol "Submit" untuk mengirimkan data ke server secara asinkron.
5. Hasil dari respons server akan ditampilkan dalam bentuk tabel di bawah formulir..

## Struktur Kode

- `A.html`: File HTML yang berisi formulir (Form A) dan tabel output.
- `script.js`: File JavaScript yang mengatur logika pengiriman data ke server, menerima respons, dan menampilkan tabel.
- `B.php`: File PHP yang menerima data dari formulir, memprosesnya, dan mengembalikan respons dalam format JSON.

## Dependensi

- [jQuery](https://jquery.com/): Library JavaScript yang digunakan untuk memudahkan manipulasi dan interaksi dengan elemen HTML.
- [Bootstrap](https://getbootstrap.com/): Framework CSS yang digunakan untuk memperindah tampilan halaman web.

## Author

- Nurwandhika Rachman (215150407111017)
- Zydo Prima Ihsan (215150407111018)
