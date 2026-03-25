let str: string = "Hello";
let num: number = 10;
let isTrue: boolean = false;

let nothing: null = null;
let notAssigned: undefined = undefined;

let numbers: number[] = [1, 2, 3];
let names: string[] = ["A", "B", "C"];

let tuple: [string, number] = ["Age", 21];

let anyValue: any = "Test";
anyValue = 100;

function add(a: number, b: number): number {
  return a + b;
}

console.log(str, num, isTrue, numbers, names, tuple, anyValue, add(5, 3));