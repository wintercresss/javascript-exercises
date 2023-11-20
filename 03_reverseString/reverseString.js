const reverseString = function(string) {
    var toreturn = ""
    for (let i = string.length-1; i >= 0; i--) {
        toreturn += string[i]
    }
    return toreturn
};

// Do not edit below this line
module.exports = reverseString;
