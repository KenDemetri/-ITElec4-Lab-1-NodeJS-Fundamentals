const { hasPassingGrade } = require('./utils.js');

const studentName = "Ken Demetri B. Payo"; // Your full name
const grades = [88, 93, 89, 94, 85]; // Sample grades
const studentDetails = {
    major: "Information Technology",
    year: 4
};

const calculateAverage = (gradesArray) => {
    const sum = gradesArray.reduce((total, grade) => total + grade, 0);
    return sum / gradesArray.length;
};


const averageGrade = calculateAverage(grades);

console.log(`Student: ${studentName}`);
console.log(`Major: ${studentDetails.major}`);
console.log(`Year: ${studentDetails.year}`);
console.log(`Grades: ${grades.join(", ")}`);
console.log(`Average Grade: ${averageGrade.toFixed(2)}`);


if (hasPassingGrade(averageGrade)) {
    console.log("Congratulations! You have a passing average.");
} else {
    console.log("You need to improve your average grade.");
}