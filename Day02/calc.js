exports.calculate = (list) => {
    var horizontal = 0;
    var depth = 0;

    for(let item of list) {
        const value = item.substring(0, item.length -2);
        const number = Number(item.substring(item.length -1));
        switch(value) {
            case "forward":
                horizontal += number;
                break;
            case "up":
                depth -= number;
                break;
            case "down":
                depth += number;
                break;
        }
    }
    return horizontal * depth;
};

exports.calculateAlternative = (list) => {
    var horizontal = 0;
    var depth = 0;
    var aim = 0;

    for(let item of list) {
        const value = item.substring(0, item.length -2);
        const number = Number(item.substring(item.length -1));
    
        if (value.search("forward") == 0) {
            horizontal += number;
            depth += (aim * number);
            continue;
        }
        if (value.search("up") == 0) {
            aim -= number;
            continue;
        }
        if (value.search("down") == 0) {
            aim += number;
            continue;
        }
    }
    return horizontal * depth;
};