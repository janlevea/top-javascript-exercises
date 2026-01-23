const palindromes = function (str) {
    // Remove punctuation
    str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    // Remove spaces
    str = str.replaceAll(" ", "");
    // Ignore casing
    str = str.toLowerCase();
    // Get length
    lengthOfStr = str.length;

    // Create reversed string
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    // Return true if palindrome
    return reversedString === str;
};

// Do not edit below this line
module.exports = palindromes;
