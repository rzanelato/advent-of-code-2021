exports.test = () => {
    return ["00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010", "01010"];
}

exports.get = () => {
    const fs = require('fs');
    try {
        const data = fs.readFileSync('input.txt', 'utf8')
        return data.split("\n");
    } catch (err) {
        console.log("error:",err);
        return [];
    }
}