function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let array = [];
    let number;

    for (let i = 1; i < arr.length; i++) {
        number = arr[i] / arr[i - 1];
        array.push(number);
    }

    let total = array.reduce((a, b) => a + b, 0);
    let result = total / array.length;

    if (result == array[0]) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false