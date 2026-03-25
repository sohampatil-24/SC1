function calculateAverage(marks: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

let studentMarks: number[] = [78, 85, 90, 88, 76];

console.log("Student Marks:");
for (let i = 0; i < studentMarks.length; i++) {
    console.log(studentMarks[i]);
}

let avg = calculateAverage(studentMarks);
console.log("Average Marks: " + avg);