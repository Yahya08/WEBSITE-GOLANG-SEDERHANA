document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengubah warna latar belakang
    function changeBackgroundColor() {
        const colors = ['#f4f4f4', '#e8f5e9', '#fff3e0', '#e3f2fd'];
        const currentColor = document.body.style.backgroundColor;
        let newColor;
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === currentColor);
        document.body.style.backgroundColor = newColor;
    }

    // Menambahkan event listener ke tombol ubah warna
    const changeColorBtn = document.getElementById('changeColorBtn');
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', changeBackgroundColor);
    }

    // Fungsi untuk menampilkan waktu
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const timeDisplay = document.getElementById('timeDisplay');
        if (timeDisplay) {
            timeDisplay.textContent = `Waktu saat ini: ${timeString}`;
        }
    }

    // Update waktu setiap detik
    setInterval(updateTime, 1000);
    updateTime(); // Panggil sekali untuk menampilkan waktu awal

    // Menambahkan validasi form sederhana
    const greetForm = document.getElementById('greetForm');
    if (greetForm) {
        greetForm.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                event.preventDefault();
                alert('Silakan masukkan nama Anda.');
            }
        });
    }
});