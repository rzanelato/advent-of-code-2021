exports.calculate = (depths) => {
    let lastDepth = null;
    let countIncreases = 0;

    for(let depth of depths) {
        if (lastDepth ==  null) {
            lastDepth = depth;
            continue;
        }
        if (depth > lastDepth) {
            countIncreases++;
        }
        lastDepth = depth;
    }
    return countIncreases;
};

exports.calculateGroups = (depths) => {
    let lastDepth = null;
    let countIncreases = 0;

    for(let index in depths) {
        let sum3Depths = sumGroup(depths, index);
        if (lastDepth ==  null) {
            lastDepth = sum3Depths;
            continue;
        }
        if (sum3Depths > lastDepth) {
            countIncreases++;
        }
        lastDepth = sum3Depths;
    }
    return countIncreases;
};

function sumGroup(list, index) {
    var num1 = list[index];
    var num2 = list[++index];
    var num3 = list[++index];
    return num1 + num2 + num3;
}