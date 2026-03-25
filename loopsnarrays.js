function calculateAverage(marks) {
    var sum = 0;
    // loop through array
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}
var studentMarks = [78, 85, 90, 88, 76];
console.log("Student Marks:");
for (var i = 0; i < studentMarks.length; i++) {
    console.log(studentMarks[i]);
}
var avg = calculateAverage(studentMarks);
console.log("Average Marks: " + avg);
