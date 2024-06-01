// Recursion Question: Factorial  



function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive step: Multiply n by the factorial of n-1
    return n * factorial(n - 1);
}

// Test Input
let n = 10;
console.log("Factorial of", n + ":", factorial(n));