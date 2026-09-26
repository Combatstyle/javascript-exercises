const palindromes = function (str) {
    // Convert to lowercase and remove all non alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned string and compare it to the original cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
