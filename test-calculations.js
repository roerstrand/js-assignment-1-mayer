// Test file to verify mathematical calculations
// Run this in Node.js or browser console to test the functions

// Test mathematical shape calculations
function testMathematicalShapes() {
    console.log("=== TESTING MATHEMATICAL SHAPES ===");
    
    // Test square diagonal
    const diagonal = 9 * Math.sqrt(2);
    console.log(`Square diagonal (side=9): ${diagonal.toFixed(2)}`);
    console.log(`Expected: 12.73`);
    console.log(`Test passed: ${Math.abs(diagonal - 12.73) < 0.01}`);
    
    // Test triangle area using Heron's formula
    const a = 5, b = 6, c = 7;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(`Triangle area (sides=5,6,7): ${area.toFixed(2)}`);
    console.log(`Expected: 14.70`);
    console.log(`Test passed: ${Math.abs(area - 14.70) < 0.01}`);
    
    // Test circle properties
    const radius = 4;
    const circumference = 2 * Math.PI * radius;
    const surfaceArea = Math.PI * radius * radius;
    console.log(`Circle circumference (r=4): ${circumference.toFixed(2)}`);
    console.log(`Expected: 25.13`);
    console.log(`Test passed: ${Math.abs(circumference - 25.13) < 0.01}`);
    
    console.log(`Circle surface area (r=4): ${surfaceArea.toFixed(2)}`);
    console.log(`Expected: 50.27`);
    console.log(`Test passed: ${Math.abs(surfaceArea - 50.27) < 0.01}`);
}

// Test conditional statements
function testConditionals() {
    console.log("\n=== TESTING CONDITIONAL STATEMENTS ===");
    
    // Test larger number function
    function findLarger(num1, num2) {
        if (num1 > num2) return num1;
        else if (num2 > num1) return num2;
        else return num1;
    }
    
    console.log(`Larger of 15 and 8: ${findLarger(15, 8)}`);
    console.log(`Larger of 3 and 12: ${findLarger(3, 12)}`);
    console.log(`Larger of 7 and 7: ${findLarger(7, 7)}`);
    
    // Test even/odd function
    function checkEvenOdd(num) {
        return num % 2 === 0 ? "even" : "odd";
    }
    
    console.log(`24 is ${checkEvenOdd(24)}`);
    console.log(`17 is ${checkEvenOdd(17)}`);
    console.log(`0 is ${checkEvenOdd(0)}`);
}

// Run tests
testMathematicalShapes();
testConditionals();

console.log("\n=== ALL TESTS COMPLETED ==="); 