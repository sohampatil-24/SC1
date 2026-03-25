class Student {
    name: string;
    marks: number;

    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
    }

    checkResult(): void {
        if (this.marks >= 40) {
            console.log(this.name + " is PASS");
        } else {
            console.log(this.name + " is FAIL");
        }
    }
}

let s1 = new Student("Ayush", 75);
let s2 = new Student("Rahul", 75);

s1.checkResult();
s2.checkResult();