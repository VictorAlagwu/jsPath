'use strick';

var task = {
    title: 'MyTask',
    description: 'MyDescription'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function (){
        return this.title + ' is an urgent task';
    },
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(urgentTask.toString());