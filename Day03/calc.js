exports.calculateP1 = (list) => {
    const zeroValues = new Map();
    const oneValues = new Map();

    for(let item of list) {
        let arrayRow = item.split(''); 
        for(let indexRow in arrayRow) {
            if (arrayRow[indexRow] == 0) {
                addValueMap(zeroValues, indexRow);
            } else {
                addValueMap(oneValues, indexRow);          
            }
        }
    }
    return calcAnswer(zeroValues, oneValues);    
};

function addValueMap(map, index) {
    if (map.has(index)) {
        let value = map.get(index);
        map.set(index, (value + 1));
    } else {
        map.set(index, 1);
    }
}

function calcAnswer(mapZeros, mapOnes) {
    var gammaRate = "";
    var epsilonRate = "";
    for (let index = 0; index < mapZeros.size; index++) {
        let valueZeros = mapZeros.get(String(index));
        let valueOnes = mapOnes.get(String(index));
        if (valueOnes > valueZeros) {
            gammaRate += "1";
            epsilonRate += "0";
        } else {
            gammaRate += "0";
            epsilonRate += "1";
        }
    }
    return Answer.getResult(gammaRate, epsilonRate);
}


exports.calculateP2 = (list) => {
    const mapResult = new MapCountValues(list);
    
    const conditionalOxygen = (ones, zeros) => {return ones >= zeros ? "1": "0"; };
    var oxygen = getValue([...list], 0, mapResult.getZeros(), mapResult.getOnes(), conditionalOxygen);
    
    const conditionalCo2 = (ones, zeros) => {return ones >= zeros ? "0": "1"; };
    var co2 = getValue([...list], 0, mapResult.getZeros(), mapResult.getOnes(), conditionalCo2);
    
    return Answer.getResult(oxygen, co2);
};

function getValue(list, index, mapZeros, mapOnes, conditional) {
    if (list.length === 1) {
        return list[0];
    }
    let valueZeros = mapZeros.get(String(index));
    let valueOnes = mapOnes.get(String(index));
    let value = conditional(valueOnes, valueZeros);

    const newList = getListReducedByIndex(list, value, index);
    const mapResult = new MapCountValues(newList);
    
    return getValue(newList, ++index, mapResult.getZeros(), mapResult.getOnes(), conditional);
}

function getListReducedByIndex(list, value, index) {
    const newList = new Array();
    
    for(let item of list) {
        var numIndex = item.substring(index, index+1);
        if (numIndex == value) {
            newList.push(item);
        }
    }
    return newList;
}

class Answer {

    static getResult(value1, value2) {
        const convertToDecimal = (binary) => { return parseInt((binary + '').replace(/[^01]/gi, ''), 2) };
        return convertToDecimal(value1) * convertToDecimal(value2);
    }
}

class MapCountValues {
    zeroValues = new Map();
    oneValues = new Map();

    constructor(list) {
        this.list = list;
        this.execute();
    }

    execute() {
        for(let item of this.list) {
            let arrayRow = item.split(''); 
            for(let indexRow in arrayRow) {
                if (arrayRow[indexRow] == 0) {
                    addValueMap(this.zeroValues, indexRow);
                } else {
                    addValueMap(this.oneValues, indexRow);          
                }
            }
        }
    }

    getZeros() {
        return this.zeroValues;
    }

    getOnes() {
        return this.oneValues;
    }
}
