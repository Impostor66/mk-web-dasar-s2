function starttime() {
    var today = new Date(); // Gunakan '=' untuk penugasan
    var h = today.getHours(); // Ganti '-' dengan '=' untuk penugasan variabel
    var m = today.getMinutes(); // Sama seperti di atas
    var s = today.getSeconds(); // Sama seperti di atas

    // Menambahkan angka 0 jika nilai <10
    h = checkTime(h); // Menggunakan '=' untuk menyimpan nilai yang dikembalikan
    m = checkTime(m); // Sama seperti di atas
    s = checkTime(s); // Sama seperti di atas

    document.getElementById('jam').innerHTML = h + ":" + m + ":" + s; // Menggunakan '=' dan '+' untuk menggabungkan string

    setTimeout(startTime, 500); // Memanggil ulang fungsi setelah setengah detik
}

function checkTime(i) { // Menggunakan 'i' sebagai parameter fungsi
    if (i < 10) { // Memeriksa apakah nilai kurang dari 10
        i = "0" + i; // Tambahkan '0' jika kurang dari 10
    }
    return i; // Mengembalikan nilai yang telah diperiksa
}