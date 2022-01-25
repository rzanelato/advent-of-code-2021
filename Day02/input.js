exports.get = () => {
    const fs = require('fs');
    try {
        const data = fs.readFileSync('input.txt', 'utf8')
        return data.split("\n");
    } catch (err) {
        return [];
    }
}

exports.test = () => {
    return ["forward 5","down 5","forward 8", "up 3", "down 8", "forward 2"];
}