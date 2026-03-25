function checkGrade(marks) {
    if (marks >= 35) {
        console.log("You passed the exam");
    }
    if (marks >= 75) {
        console.log("You got Distinction");
    }
    else {
        console.log("You did not get Distinction");
    }
    if (marks >= 90) {
        console.log("Grade: A+");
    }
    else if (marks >= 75) {
        console.log("Grade: A");
    }
    else if (marks >= 60) {
        console.log("Grade: B");
    }
    else if (marks >= 35) {
        console.log("Grade: C");
    }
    else {
        console.log("Grade: Fail");
    }
    switch (true) {
        case marks >= 90:
            console.log("Excellent Performance");
            break;
        case marks >= 60:
            console.log("Good Performance");
            break;
        default:
            console.log("Needs Improvement");
    }
    console.log("Marks countdown:");
    for (var i = marks; i >= marks - 3; i--) {
        console.log(i);
    }
}
checkGrade(95);
