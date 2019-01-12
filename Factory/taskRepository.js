var taskRepository = function() {
    var get = function (id) {
        console.log('Getting Task Repo' + id);
        return {
            name: "New Project from Task Repository"
        }
    }

    var save = function (id) {
        console.log('Saving Task Repo' + id);
        return {
            name: "Save Task Repository"
        }
    }
    return {
        get: get,
        save:save
    }
}
module.exports = taskRepository();