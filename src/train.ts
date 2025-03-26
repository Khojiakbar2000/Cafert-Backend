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

//TASK H:
/*function getPositive(arr:number[]):string{
    return arr
    .filter((num:number) =>num > 0)
    .join("")
}

console.log(getPositive([1, -4, 2]))*/

//TASK I
/*function majorityElement(arr:number[]):number|null{
    const countMap = new Map<number, number>();

    for (let num of arr){
        countMap.set(num, (countMap.get(num)||0) + 1);
    }

    return [...countMap.entries()].reduce((a,b)=>(b[1]>a[1]? b : a))[0]

}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]))*/

//TASK J
/*function findLongestWord(sentence: string): string {
    const words = sentence.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("I come from Uzbekistan"))*/

//TASK H2
/*function getDigits (input: string): string{
return input.split("").filter(char=>/\d/.test(char)).join("")
}

console.log(getDigits("m14i1t"));*/

//MITASK-K
function countVowels(s: string): number {
    const vowels = "aeiouAEIOU";
    return s.split("").filter(char=>vowels.includes(char)).length;
}

console.log(countVowels("string"));