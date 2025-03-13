/*function getHighestIndex(arr: number[]): number{
    if(arr.length === 0) return -1

    let maxVal: number = arr[0];
    let maxIndex: number = 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maxVal){
         maxVal = arr[i];
         maxIndex = i ;
        }
    }

    return maxIndex
}

console.log(getHighestIndex([5, 21, 12, 21, 8]))*/

function getPositive(arr:number[]):string{
    return arr
    .filter((num:number) =>num > 0)
    .join("")
}

console.log(getPositive([1, -4, 2]))