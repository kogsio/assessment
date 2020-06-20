var vm = require("vm");
var fs = require("fs");

var load = function(path,target){
    var file = fs.readFileSync(path);
    const script = new vm.Script(file);
    var context = {};
    script.runInNewContext(context);
    return context[target];
}

module.exports = load;