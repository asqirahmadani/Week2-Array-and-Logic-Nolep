/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let obj = {};

    // menyimpan data ke dalam object
    for (let i = 0; i < animals.length; i++) {
        let hurufAwal = animals[i][0];  // ambil huruf pertama

        // jika key belum ada, buat array kosong
        if (!obj[hurufAwal]) {
            obj[hurufAwal] = [];
        }

        obj[hurufAwal].push(animals[i]);  // simpan ke dalam array di dalam object
    }

    // menggabungkan semua array dalam urutan alfabet
    let urut = Object.keys(obj).sort(); // ambil semua key dan urutkan
    let hasil = []

    for (let i = 0; i < urut.length; i++) {
        hasil.push(obj[urut[i]]);   // masukkan array dari setiap key ke dalam hasil
    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]