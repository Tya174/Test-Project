const images = [
    'img/hashira.jpg',
    'img/air.jpeg',
    'img/hitam.jpg',
    'img/merah.jpeg',
    'img/zenitsu.jpg',
];  // Ganti dengan path gambar yang sesuai

let currentIndex = 0;
const slideshowElement = document.querySelector('.slideshow-background');

// Fungsi untuk mengubah background image
function changeBackgroundImage() {
    slideshowElement.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Ganti gambar setiap 5 detik (5000 milidetik)
setInterval(changeBackgroundImage, 6000);

// Set gambar awal
changeBackgroundImage();
