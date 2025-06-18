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

//MITASK-T
/*function mergeSortedArrays(arr1: number[], arr2: number[]): number[]{
    const merged = [...arr1, ...arr2];
    return merged.sort((a, b)=> a-b);
}

console.log(mergeSortedArrays([0, 3 , 4, 31], [4, 6, 30]));*/

//MITASK-U
/*function sumOdds(n: number):number{
let count = 0;

for (let i = 1; i < n; i += 2){
    count++
}
return count;

}

console.log(sumOdds(9));*/

//TASK-V
/*function countChars(str: string): Record<string, number>{
    const result: Record<string, number> ={};

    for (const char of str) {
        result[char] = (result[char] || 0) + 1;
    }
    return result;
}
console.log(countChars("hello"))*/

//TASK-W

/*function chunkArray<T>(arr: T[], size: number): T[][]{
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))*/

//MITASK-X

/*function countOccurrences(obj:any, key: string): number{
  let count = 0;
  function search(current : any){
    if(typeof current === 'object' && current !== null){
        for (let k in current){
            if (k === key) count ++;
            search(current[k]);
        }
    }
  }
  search(obj);
  return count;
  }

  const data = {
    model : 'Bugatti',
    steer: {
        model: 'HANKOOK',
        size: 30
    }
  }

  console.log(countOccurrences(data, 'model'));*/

  //TASK-Y

  /*function findIntersection(arr1: number[], arr2: number[]): number[]{
    return arr1.filter((value)=> arr2.includes(value));
  }

  console.log(findIntersection([1, 2, 3], [3, 2, 0]))*/

  //TASK-Z
  

  /*function sumEvens(arr:number[]): number {
    return arr.filter(num => num % 2 === 0).reduce((acc, curr)=> acc + curr, 0);
  }

  console.log(sumEvens([1 , 2, 3, 2]))*/

  //TASK-ZA
  /*function sortByAge(arr:{age: number}[]): {age: number}[] {
    return arr.sort((a, b)=> a.age - b.age)
    }
  
    console.log(sortByAge([{age:23}, {age:21}, {age:13}]));*/

    //TASK ZB

    /*function randomBetween(min: number, max:number): number{
     return Math.floor(Math.random()*(max-min+1))+min;
    }

    console.log(randomBetween(100,50))*/

    //TASK-ZD

    /*function changeNumberInArray(index: number, arr: number[], newValue: number): number[]{
        if(index >= 0 && index < arr.length){
            arr[index] = newValue;
        }
        return arr;
    }

    console.log(changeNumberInArray(1,[1, 3, 7, 2], 2));*/

    //ZE-TASK

   /*function removeDuplicate(str: string): string{
    let result = '';
    for (let char of str){
        if(!result.includes(char)){
            result += char;

        }
    }
    return result;
   }

   console.log(removeDuplicate('string'));*/

   //ZF-TASK

   /*function capitalizeWords(sentence: string): string {
    return sentence 
    .split(' ')
    .map(word => {
        if (word.length > 2) {
            return word[0].toUpperCase() + word.slice(1);
        }
        return word;
    })
    .join(' ');
   }

   console.log(capitalizeWords('name should be a string'))*/

   //ZG-TASK

 /* function toSnakeCase (input: string):string{
    if(typeof input !== 'string') return '';
    return input 
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_');
  }
   
  console.log(toSnakeCase('name should be a string'))*/

  //ZH-TASK

  /*function findDisappearedNumbers(arr: number[]): number[]{
   const max = Math.max(...arr);
   const full = new Set(Array.from({length: max}, (_, i)=>i + 1));
   for(const num of arr){
    full.delete(num)
   }
   return Array.from(full)
  }

  console.log(findDisappearedNumbers([1, 3, 4, 7]))*/

  //ZI-TASK

  /*function delayHelloWorld(): Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello World");
        
        }, 3000)
    });
  }

  async function showHelloWorld(){
    const result = await delayHelloWorld()
    console.log(result)
  }

  showHelloWorld();*/

  //TASK-ZJ

  /*function reduceNestedArray(arr: any[]):number {
    return arr.reduce((sum, item)=>{
        if(Array.isArray(item)){
            return sum + reduceNestedArray(item);
        }else if(typeof item === "number"){
            return sum + item;
        }
    }, 0);

  }

  console.log(reduceNestedArray([1, [1,2,[4]]]))*/

  //TASK-ZK

  /*function printNumbers():void {
  let count = 1

  const intervalid = setInterval(()=>{
    console.log(count);
    count++
    if(count > 5){
        clearInterval(intervalid)
    }
  }, 1000)
  }

  printNumbers()*/

  //TASK-ZM

  /*function reverseInteger(num: number): number{
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed)
  }

  console.log(reverseInteger(123456789))*/

  //ZN-TASK

  /*function rotateArray(arr: any[], n: number) : any[]{
const length =  arr.length ;
const cutIndex = length - n ;
const endPart = arr.slice(cutIndex)
const startPart = arr.slice(0, cutIndex)
return [...endPart,...startPart]

  }

console.log(rotateArray([1,2,3,4,5,6],3))*/

//TASK-ZO

/*function areParenthesesBalanced(input: string): boolean {
    let count = 0;

    for (const char of input){
        if(char === '('){
            count ++;
        }else if(char == ')'){
            count --;
        
            if (count < 0 ) return false;
        }
    }
return count === 0;
}

console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));*/

//TASK-ZP

/*function countNumbersAndLetters(input: string): {number:number; letter: number}{
    let number = 0;
    let letter = 0;

    for (const char of input){
        if(/[0-9]/.test(char)){
            number ++;
        }else if (/[a-zA-Z]/.test(char)){
            letter++;
        }
    }
    return {number, letter}
}

console.log(countNumbersAndLetters("string152%\¥"))*/

//TASK-ZQ
/*function findDuplicate(arr:number[]):number[] {
const count: {[key: number]: number} = {};
const result:number[] = [];

for (const num of arr){
    count[num] = (count[num] || 0) + 1;
}

for (const key in count ){
    if(count[key] >= 2){
        result.push(Number(key));
    }
}
return result;
}

console.log(findDuplicate([1,2,3,4,5,4,3,4]))*/

//TASK-ZR 

function singleNumber(nums: number[]):number {
    const count: Record<number, number> = {};
    for (const num of nums ) {
        count[num] = (count[num] || 0)+1;
    
  
    }
    for (const num of nums) {
        if (count [num] === 1) {
            return num;
        }
    }
    throw new Error("No single number found")
}

 console.log(singleNumber([4,2,1,2,1]))

  


   

   
    

  

