module.exports = function toReadable(number) {
    const numWords = require('num-words');

    const amountInWords = numWords(number);

    return amountInWords.replace("and ", "");
}
