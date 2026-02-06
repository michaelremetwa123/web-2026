// Mengambil tombol dari HTML
const tombol = document.getElementById('btn-mode');

// Perintah yang dijalankan saat tombol diklik
tombol.addEventListener('click', function() {
    // Memberitahu body untuk ganti "class"
    document.body.classList.toggle('dark-mode');
});