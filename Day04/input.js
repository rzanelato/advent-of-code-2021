exports.test = () => {
    const fs = require('fs');
    try {
        const data = fs.readFileSync('test.txt', 'utf8')
        return data.split("\n");
    } catch (err) {
        console.log("error:",err);
        return [];
    }
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