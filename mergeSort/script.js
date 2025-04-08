//This divides into smaller chunks 
function mergeSort(List){
    if (List.length < 2){
        return List;
    } else {
        const mid = Math.floor(List.length / 2)
        const leftList = List.slice(0,mid)
        const rightList  = List.slice(mid)
        return merge(mergeSort(leftList), mergeSort(rightList))
    }
}

//This will organize smaller list or just 2 numbers
function merge(leftList, rightList){
    const sortedList = []
    while(leftList.length && rightList.length) {
        if (leftList[0] <= rightList[0]){
            sortedList.push(leftList.shift())
        } else {
            sortedList.push(rightList.shift())
        }
    }
    return [...sortedList, ...leftList, ...rightList]
}

//let exa = [5,3,7,6,2];