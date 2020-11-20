class Person {


    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    excercise() {
        console.log(`I don't excersise`);
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

var p1 = new Person("Osmar", "RoadToHire", 21);

p1.excercise();
p1.fetchJob();

class Programmer extends Person {

    languages;
    busy;

    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }
    completeTask() {
        this.busy = false;
    }
    acceptNewTask() {
        this.busy = true;
    }
    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} cannot accept any task at the moment.`)
        } else {
            console.log(`${this.name} is able to accept any task`)
        }
    }
    learnLanguage(newLang) {
        this.languages.push(newLang);
    }
    listLanguage(newLang) {
        this.languages.forEach(function (currentValue, index, arr) { console.log(arr[index]) })
    }
}
var p2 = new Programmer("Chris", "Teacher", 23, ["javascript", "php"])

console.log(p2.busy)
p2.completeTask();
console.log(p2.busy);
p2.acceptNewTask();
console.log(p2.busy)
p2.completeTask();
p2.offerNewTask();
console.log(p2.languages);
p2.learnLanguage("mySQL");
p2.listLanguage();