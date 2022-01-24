function calculate(depths) {
    let lastDepth = null;
    let countIncreases = 0;

    for(let index in depths) {
        var depth = depths[index];

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
}
