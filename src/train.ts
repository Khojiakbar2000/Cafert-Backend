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
/*function countVowels(s: string): number {
    const vowels = "aeiouAEIOU";
    return s.split("").filter(char=>vowels.includes(char)).length;
}

console.log(countVowels("string"));*/

//MITASK-L
/*function reverseSentence(sentence:string):string{
return sentence
.split(" ")
.map(word=>word.split("").reverse().join(""))
.join(" ");
}

console.log(reverseSentence("we like coding"))*/

//MITASK M
/*function getSquareNumbers(numbers: number[]): {
    number: number , square: number }[]{
    return numbers.map(num=>({
        number: num,
        square: num * num
    }))
}

console.log(getSquareNumbers([1,2, 3]))*/
//MITASK-O
/*function calculateSumOfNumbers(arr: any[]): number {
    let sum = 0;

    for (const item of arr) {
        if(typeof item === "number"){
            sum += item;
        }
    }

    return sum;
}

console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));*/

//MITASK-P

/*function objectToArray(obj: Record<string, any>): [string, any][]{
    return Object.keys(obj).map(key=>[key, obj[key]]);
}

console.log(objectToArray({ a: 10, b:20}));*/

//MITASK-Q
/*function hasProperty(obj: object, key: string): boolean {
    return Object.keys(obj).includes(key);
}

console.log(hasProperty({name: "BMW", model: "M3"}, "model"));
console.log(hasProperty({name: "BMW", model: "M3"}, "year"));*/

//MITASK-R

/*function calculate(expression: string): number{
    const [a, b] = expression.split("+").map(Number);
    return a + b;
}

console.log(calculate("50+50"));*/

//MITASK-S
/*function missingNumber(arr: number[]): number{
    const n : number = arr.length;
    const expectedSum: number = (n * (n+1)) /2;
    const actualSum: number = arr.reduce((acc, num)=> acc + num, 0);
    return expectedSum - actualSum;
}

console.log(missingNumber([3,0,1]));*/

function mergeSortedArrays(arr1: number[], arr2: number[]): number[]{
    const merged = [...arr1, ...arr2];
    return merged.sort((a, b)=> a-b);
}

console.log(mergeSortedArrays([0, 3 , 4, 31], [4, 6, 30]));
