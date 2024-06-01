// Find Missing Number 

function findMissingNumber(nums) {
    const n = nums.length + 1; // Add 1 to include the missing number in the range

    // Calculate the sum of integers from 1 to n using the formula (n * (n + 1)) / 2
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the sum of all elements in the array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Test Input
let nums = [1, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Missing Number:", findMissingNumber(nums));