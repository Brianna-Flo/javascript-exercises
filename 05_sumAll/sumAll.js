const sumAll = function(start, stop) {
    if (start < 0 || stop < 0 || !Number.isInteger(start) || !Number.isInteger(stop)) {
        return "ERROR";
    }

    if (stop < start) {
        const temp = start;
        start = stop;
        stop = temp;
    }

    let sum = 0;
    for (let i = start; i <= stop; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
