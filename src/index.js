module.exports = function toReadable(number) {
    const ONE_NINETEEN = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const TWENTY_NINETY = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (number < 20) return ONE_NINETEEN[number];

    let unit = number % 10;
    let hundred = Math.floor(number / 100);
    let tens = number - (hundred * 100 + unit);
    let num_str = [];

    if (hundred > 0) {
        num_str.push(`${ONE_NINETEEN[hundred]} hundred`);
    }

    if (tens + unit < 20 && tens + unit != 0) {
        num_str.push(ONE_NINETEEN[tens + unit]);
    } else if (tens + unit >= 20) {
        num_str.push(TWENTY_NINETY[tens / 10 - 2]);
        if (unit != 0) num_str.push(ONE_NINETEEN[unit]);
    }

    return num_str.join(" ");
};
