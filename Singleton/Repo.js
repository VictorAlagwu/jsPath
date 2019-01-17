var repo = function () {
    var called = 0;
    var save = function (task) {
        called++;
        console.log('Saving '+ task + ' Called ' + called + ' times');
    }
    console.log('Newing Up Task Repo');
    return {
        save: save
    }
}

module.exports = new repo;