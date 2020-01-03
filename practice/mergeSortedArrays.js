function mergeArrays(array1, array2){
    mergedArray = [];
    mergedArray.push(...array1, ...array2);
    return mergedArray;
}

function mergeSortedArrays(array1, array2) {
    let mergedArray = mergeArrays(array1, array2);

    for(let i = 0; i < mergedArray.length; i++){
        if(mergedArray[i + 1] && mergedArray[i] > mergedArray[i + 1]){
            let holder = mergedArray[i + 1];
            mergedArray[i + 1] = mergedArray[i];
            mergedArray[i] = holder;
        }
    }

    console.log(mergedArray);
}



mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);