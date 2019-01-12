var userRepository = function () {
    var get = function (id) {
        console.log("Getting User Repository " + id);
        return {
            name: "New User Repository from DB"
        }
    }

    var save = function (id) {
        console.log("Saving User Repository " + id);
        return {
            name: "Saving User Repo in the DB"
        }
    }

    return {
        get: get,
        save: save
    }
}

module.exports = userRepository();