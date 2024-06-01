 
//   Remove Duplicate  

function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // Empty array case

    let i = 0; // Pointer for unique elements

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            // If element at index j is different from element at index i,
            // increment i and update element at index i with element at index j
            i++;
            nums[i] = nums[j];
        }
    }

    // Length of the array up to index i (inclusive) will be the new length without duplicates
    return i + 1;
}

// Test Input
let nums = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
console.log("New Length:", removeDuplicates(nums));