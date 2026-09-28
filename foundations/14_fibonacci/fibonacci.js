const fibonacci = function(n) {
    let count = Number(n);

    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    if (count === 1 || count === 2)  return 1;

    let a = 1;
    let b = 1;

    for (let i = 3; i <= count; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
