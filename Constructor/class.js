/* jshint -W097 */
/* jshint -W117 */
'use strict';

class Task {
 constructor(name) {
    this.name = name;
    this.completed = false;
 }
 complete () {
        if (this.completed == true ){
            console.log("Task Completed");
        } else {
            console.log('Completing task: ' + this.name);
        }
    }  
    save () {
        console.log('Saving Task: ' + this.name);
    }
        // module.exports = Task;
}


var task1 = new Task("Create a demo for constructor");
var task2 = new Task("Create a demo for module");
var task3 = new Task("Create a demo for singletons");
var task4 = new Task("Create a demo for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();
