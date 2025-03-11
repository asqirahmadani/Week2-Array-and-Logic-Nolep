//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let array = [];
    let number;

    for (let i = 1; i < arr.length; i++) {
        number = arr[i] - arr[i - 1];
        array.push(number);
    }

    let total = array.reduce((a, b) => a + b, 0);
    let rata2 = total / array.length;

    if (rata2 == array[0]) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false