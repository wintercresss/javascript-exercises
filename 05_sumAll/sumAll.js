const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    if (!(typeof num1 == "number")) return "ERROR"
    if (!(typeof num2 == "number")) return "ERROR"

    var lower = 0
    var higher = 0
    var sum = 0

    if (num1 < num2) {
        lower = num1
        higher = num2
    } else {
        lower = num2
        higher = num1
    }

    for (let i = lower; i <= higher; i++) {
        sum += i
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
