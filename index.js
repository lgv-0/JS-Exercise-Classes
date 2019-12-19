/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person
{
  constructor(s_Name, i_Age)
  {
    this.name = s_Name;
    this.age = i_Age;
    this.stomach = [];
  }

  eat(s_Food)
  {
    if (this.stomach.length < 10)
      this.stomach.push(s_Food);
  }

  poop()
  {
    this.stomach = [];
  }

  toString()
  {
    return `${this.name}, ${this.age}`;
  }
}

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car
{
  constructor(s_Model, i_MilesPerGallon)
  {
    this.model = s_Model;
    this.milesPerGallon = i_MilesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  fill (f_Gallons)
  {
    this.tank += f_Gallons;
  }

  drive (f_Distance)
  {
    let f_LengthCanDrive = this.tank * this.milesPerGallon;

    if (f_LengthCanDrive < f_Distance)
    {
      this.odometer += f_LengthCanDrive;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
    else
    {
      this.odometer += f_Distance;
      this.tank -= f_Distance / this.milesPerGallon;
    }
  }
}

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian
{
  constructor(a_Args)
  {
    this.name = a_Args["name"];
    this.age = a_Args["age"];
    this.location = a_Args["location"];
  }

  speak()
  {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/

var i_Seed = 1;
function mGet(i_Max)
{
  let f_Gen = Math.sin(i_Seed++) * i_Max;
  if (f_Gen < 0)
    f_Gen *= -1;
  return f_Gen;
}
function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Instructor extends Lambdasian
{
  constructor(a_Args)
  {
    super(a_Args);
    this.specialty = a_Args["specialty"];
    this.favLanguage = a_Args["favLanguage"];
    this.catchPhrase = a_Args["catchPhrase"];
  }

  demo (s_Subject)
  {
    return `Today we are learning about ${s_Subject}`;
  }

  grade (o_Student, s_Subject)
  {
    return `${o_Student.name} receives a perfect score on ${s_Subject}`;
  }

  modStudentGrade(o_Student)
  {
    let i_PredFactor = Math.round(mGet(35));

    o_Student.i_Grade = (mGet(300) < 200) ? (o_Student.i_Grade + i_PredFactor) : (o_Student.i_Grade - i_PredFactor);

    if (o_Student.i_Grade > 100)
      o_Student.i_Grade = 100;
    else if (o_Student.i_Grade < 0)
      o_Student.i_Grade = 0;
  }
}

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian
{
  constructor(a_Args)
  {
    super(a_Args);
    this.previousBackground = a_Args["previousBackground"];
    this.className = a_Args["className"];
    this.favSubjects = a_Args["favSubjects"];
    this.i_Grade = 50;
  }

  listSubjects()
  {
    let s_Subs = "";
    this.favSubjects.forEach(i =>
      {
        s_Subs += i + ", ";
      });
    
    return s_Subs;
  }

  PRAssignment(s_Subject)
  {
    return `${this.name} has submitted a PR for ${s_Subject}`;
  }

  sprintChallenge(s_Subject)
  {
    return `${this.name} has begun sprint challenge on ${s_Subject}`;
  }

  async graduate(o_Instructor)
  {
    while (this.i_Grade < 70)
    {
      await sleep(2000);
      console.log("Student's grade too low, recalculating grades..");
      o_Instructor.modStudentGrade(this);
      console.log("Trying " + this.i_Grade);
    }
    console.log("Congratulations!");

    return "Congratulations!";
  }
}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor
{
  constructor(a_Args)
  {
    super(a_Args);
    this.gradClassName = a_Args["gradClassName"];
    this.favInstructor = a_Args["favInstructor"];
  }

  standUp(s_Channel)
  {
    return `${this.name} announces to ${s_Channel}, @channel standy times!`;
  }

  debugsCode(o_Student, s_Subject)
  {
    return `${this.name} debugs ${o_Student.name}'s code on ${s_Subject}`;
  }
}

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
