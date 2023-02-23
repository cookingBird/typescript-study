/// <reference path="./index.d.ts" />

class Student {
  name: string;
  class: string;
  constructor(std: StudentProps) {
    this.name = std.name;
    this.class = std.class;
  }
  say(): void {
    console.log(this.name);
  }
}
const sProp = {
  name: 'Hello World',
  class: 'grade1',
};
const a: Student = new Student(sProp);
a.say();
a.say();
a.say();
a.say();

export function HelloWorld(): string {
  const res: string = 'Hello world !';
  return res;
}
