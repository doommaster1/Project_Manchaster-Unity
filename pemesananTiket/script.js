var plus = document.querySelector('#plus')
var min = document.querySelector('#min')
var hasil = document.querySelector('.hasil')
var hasilElement = document.querySelector('.totalhargaanak');
var plusButton = document.getElementById('plus');
var minusButton = document.getElementById('min');
var harga = 25;
var jumlah = 0;
var plusdew = document.querySelector('#plusdew')
var mindew = document.querySelector('#mindew')
var hasildew = document.querySelector('.hasildew')

var total = 0;
var total1 = 0;

function tambah() {
    total += 1;
    hasil.textContent = total;
}
function tambah1() {
    total1 += 1;
    hasildew.textContent = total1;
}
function kurang() {
    if (total > 0) {
        total -= 1;
        hasil.textContent = total;

    }
}
function kurang1() {
    if (total1 > 0) {
        total1 -= 1;
        hasildew.textContent = total1;

    }
}
plus.addEventListener('click', tambah)
min.addEventListener('click', kurang)
plusdew.addEventListener('click', tambah1)
mindew.addEventListener('click', kurang1)

plusButton.addEventListener('click', function () {
    jumlah++;
    updateHarga();
});

minusButton.addEventListener('click', function () {
    if (jumlah > 0) {
        jumlah--;
        updateHarga();
    }
});

function updateHarga() {
    if (jumlah === 0) {
        hasilElement.textContent = '';
    } else {
        hasilElement.textContent = jumlah + ' Tiket Anak-anak $' + (
            harga * jumlah
        );
    }
}
var hasilElementDewasa = document.querySelector('.totalhargadew');
var plusButtonDewasa = document.getElementById('plusdew');
var minusButtonDewasa = document.getElementById('mindew');
var hargaDewasa = 45;
var jumlahDewasa = 0;

plusButtonDewasa.addEventListener('click', function () {
    jumlahDewasa++;
    updateHargaDewasa();
    updateTotalHarga(); // Menambahkan pemanggilan fungsi updateTotalHarga()
});

minusButtonDewasa.addEventListener('click', function () {
    if (jumlahDewasa > 0) {
        jumlahDewasa--;
        updateHargaDewasa();
        updateTotalHarga(); // Menambahkan pemanggilan fungsi updateTotalHarga()
    }
});
function updateTotalHarga() {
    var totalHarga = (hargaAnak * jumlahAnak) + (hargaDewasa * jumlahDewasa);
    totalHargaElement.textContent = 'Total Harga: $' + totalHarga;
}
function updateHargaDewasa() {
    if (jumlahDewasa === 0) {
        hasilElementDewasa.textContent = '';
    } else {
        hasilElementDewasa.textContent = jumlahDewasa + ' Tiket Dewasa $' + (
            hargaDewasa * jumlahDewasa
        );
    }
}

var totalHargaElement = document.querySelector('.totalHarga');

function updateTotalHarga() {
    var totalHarga = (harga * jumlah) + (hargaDewasa * jumlahDewasa);
    totalHargaElement.textContent = 'Total Harga: ' + totalHarga + '£';
}

document
    .querySelector('form')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default

        alert('Tiket Anda telah dipesan! Silahkan Cek Email Anda');
        location.reload();
    });
