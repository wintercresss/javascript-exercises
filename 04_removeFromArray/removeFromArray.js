const removeFromArray = function(arr, ...args) {
    var ret = []
    var found = false
    for (let i = 0; i < arr.length; i++) {
        found = false
        for (let j = 0; j < args.length; j++){
            if (arr[i] === args[j]) {
                found = true
                break
            }
        }
        if (found == false) {
            ret.push(arr[i])
        }
    }
    console.log(ret)
    return ret
};

// Do not edit below this line
module.exports = removeFromArray;
