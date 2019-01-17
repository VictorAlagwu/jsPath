var taskHandler = require('./taskHandler');
var myrepo = require('./repo');

myrepo.save('fromMain')
myrepo.save('AnotherOne')
myrepo.save('YetAgain')
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
