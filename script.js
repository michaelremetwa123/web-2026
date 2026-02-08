// Mengambil tombol dari HTML
const tombol = document.getElementById('btn-mode');

// Perintah yang dijalankan saat tombol diklik
tombol.addEventListener('click', function() {
    // Memberitahu body untuk ganti "class"
    document.body.classList.toggle('dark-mode');
});

const btnKirim = document.getElementById('btn-kirim');
btnKirim.onclick = function(event) {
    event.preventDefault(); // Mencegah halaman refresh
    alert("Terima kasih, " + document.querySelector('input[type="text"]').value + "! Pesan kamu sudah terkirim (simulasi).");
};
