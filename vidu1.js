
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showInfo(name, age) {
    console.log(`\n--- Thông tin ---`);
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

rl.question("Enter your name: ", function(name) {
    rl.question("Enter your birth year: ", function(birthYear) {
        const age = calculateAge(parseInt(birthYear));
        showInfo(name, age);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nProgram finished.");
    process.exit(0);
});
