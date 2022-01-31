exports.calculateP1 = (list) => {
    const numbers = list[0];
    console.log("First line:", numbers);
    delete list[0];
    //console.log(list[1]);

    //console.log(list.toString().split(',\'')[0]);
    //console.log(numbers);
    //console.log(list);

    convertListArrays(list);



    //console.log(test);

    return 0;
};

function convertListArrays(list) {
    const returnList = new Array();
    var items;
    list.forEach(function(item) {
        
        if (item === '') {
            
        } else {
            const auxList = item.split(',');    
            console.log(list.indexOf(item),">", auxList);
            //console.log("Item[2]:", list);
            items = new Array(5);
            for (let index = 0; index, auxList.length > 1; index++) {
                items.push(auxList[index]);

                if(list.indexOf(item) == 2 ) {
                    console.log("Item[2]:", item);
                }
            }
        }
    });

    
}



exports.calculateP2 = (list) => {
    return 0;
};
