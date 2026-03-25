var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.checkResult = function () {
        if (this.marks >= 40) {
            console.log(this.name + " is PASS");
        }
        else {
            console.log(this.name + " is FAIL");
        }
    };
    return Student;
}());
var s1 = new Student("Ayush", 75);
var s2 = new Student("Rahul", 75);
s1.checkResult();
s2.checkResult();
