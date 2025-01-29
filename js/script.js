function hitungBMI() {
    console.log("Fungsi hitungBMI dipanggil");

    let umur = document.getElementById("umur").value;
    let berat = parseFloat(document.getElementById("berat").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    // Mengambil nilai jenis kelamin dari radio button yang dipilih
    let jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked')?.value;

    // Menambahkan pengecekan apakah jenis kelamin sudah dipilih
    if (!jenisKelamin) {
        alert("Mohon pilih jenis kelamin.");
        return;
    }

    console.log("Umur:", umur);
    console.log("Jenis Kelamin:", jenisKelamin);
    console.log("Berat:", berat);
    console.log("Tinggi:", tinggi);

    if (!umur || isNaN(berat) || isNaN(tinggi)) {
        alert("Mohon isi semua data dengan benar.");
        return;
    }

    let tinggiMeter = tinggi / 100; // Mengkonversi tinggi ke meter
    let bmi = berat / (tinggiMeter * tinggiMeter);
    console.log("BMI:", bmi);

    let kategori = "";
    let penjelasan = "";

    // Logika kategori BMI
    if (bmi < 18.5) {
        kategori = "Kurus";
        penjelasan = "Berat badan Anda kurang.";
    } else if (bmi < 25) {
        kategori = "Normal";
        penjelasan = "Berat badan Anda normal.";
    } else if (bmi < 30) {
        kategori = "Gemuk";
        penjelasan = "Anda kelebihan berat badan.";
    } else {
        kategori = "Obesitas";
        penjelasan = "Anda mengalami obesitas.";
    }

    // Menampilkan hasil BMI
    let hasilDiv = document.getElementById("hasil");
    if (hasilDiv) {
        hasilDiv.innerHTML = `
            <p>BMI: ${bmi.toFixed(2)}</p>
            <p>Kategori: ${kategori}</p>
        `;
    }

    // Menampilkan penjelasan
    let penjelasanP = document.getElementById("penjelasan");
    if (penjelasanP) {
        penjelasanP.innerText = penjelasan;
    }
}

// Fungsi untuk menghapus hasil perhitungan saat tombol reset ditekan
function clearResults() {
    let hasilDiv = document.getElementById("hasil");
    if (hasilDiv) {
        hasilDiv.innerHTML = '';
    }

    let penjelasanP = document.getElementById("penjelasan");
    if (penjelasanP) {
        penjelasanP.innerText = '';
    }
}
