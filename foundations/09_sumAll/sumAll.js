const sumAll = function(start, end) {
    let min = Math.min(start, end);
    let max = Math.max(start, end);

    let n = (max - min + 1);

    return (n * (min + max)) / 2;
};

sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
