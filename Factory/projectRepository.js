var projectRepository = function () {
    var get = function (id) {
        console.log('Getting Project ' + id);
        return {
            name: "New Project Repository from DB"
        }
    }

    var save = function (id) {
        console.log('Saving Project ' + id);
        return {
            name: "Saving Project Repository in DB"
        }
    }

    return {
        get: get,
        save: save
    }
}

module.exports = projectRepository();