// Prompt the user to input student marks
let marks = prompt("Enter student marks (between 0 and 100):");

// Convert the input to a number
marks = parseInt(marks);

// Check if the input is valid (between 0 and 100)
if (marks >= 0 && marks <= 100) {
    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    console.log("Grade:", grade);
} else {
    // Output an error message if the input is invalid
    console.log("Invalid input! Marks should be between 0 and 100.");
}
