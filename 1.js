function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(findLargestNumber(numbers)); // Output: 5