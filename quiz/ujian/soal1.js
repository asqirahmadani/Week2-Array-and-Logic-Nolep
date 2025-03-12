/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let posisiX = [];
    let posisiO = [];

    for (let i = 0; i < arr.length; i++) {      // find 'x' and 'o'
        if (arr[i] == 'x') {
            posisiX.push(i);
        } else if (arr[i] == 'o') {
            posisiO.push(i);
        }
    }

    if (posisiX == 0) {         // if x doesn't exist, return 0
        return 0;
    }

    let jarak = [];
    for (let j = 0; j < posisiX.length; j++) {      // find distance between 'x' and 'o' using Math.abs
        for (let k = 0; k < posisiO.length; k++) {
            let number = Math.abs(posisiX[j] - posisiO[k]);
            jarak.push(number);
        }
    }

    let min = Infinity;                         // find the lowest distance
    for (let i = 0; i < jarak.length; i++) {
        if (jarak[i] < min) {
            min = jarak[i];
        }

    }
    return min;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1