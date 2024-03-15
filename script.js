function hitungGanjil() {
    var min = document.getElementById('min').value;
    var maks = document.getElementById('maks').value;

    if (min === "" || maks === "") {
        document.getElementById('jawaban').innerText = "Mohon masukkan angka.";
        return;
    }

    min = parseInt(min)
    maks = parseInt(maks)
    
    if (min > maks) {
        document.getElementById('jawaban').innerText = "Nilai minimal lebih besar daripada nilai maksimal.";
        return;
    }
    
    var total = 0;
    var prosesPenghitungan = "";
    
    for (var i = min; i <= maks; i++) {
        if (i % 2 !== 0) {
            total += i;
            prosesPenghitungan += (prosesPenghitungan === "" ? "" : " + ") + i;
        }
    }
    
    document.getElementById('jawaban').innerText = "Hasil: " + total + " (" + prosesPenghitungan + ")";
}

document.getElementById('hitungGanjil').addEventListener('click', hitungGanjil);
