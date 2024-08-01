// birinchi rasm va ikkinchi rasm bir hil ekan


// 1 Task
// let arrNums = [55,3,2,11,3,4,6,7,12];

// function arrangedFnc(arr){
//     return arr.sort((a, b) => a - b)
// }
// console.log(arrangedFnc(arrNums));


// 2 Task
// let yigindi = 0
// let arr = [1,6,9,5,8,10,15].slice(2,5).filter(value => yigindi += value)
// console.log(`2dan 5gacha bolgan qiymatlar: ${arr}`);
// console.log(`Ularning yigindisi: ${yigindi}ga teng`);

// yoki function bilan
// let arr = [1,6,9,5,8,10,15].slice(2,5)
// console.log(arr);
// function totalFnc(arr){
//     let yigindi = null
//     let res = arr.filter(value => yigindi += value)
//     return yigindi
// };
// console.log(`Ularning yigindisi: ${totalFnc(arr)}ga teng`);

// 3 Task ???????

// let arr = [2,4,5,6,6,3,2,1]

// function deleteSameNums(arr){
//     let notSameArr = []
//     return arr.filter(value => !notSameArr.includes(value) ? notSameArr.push(value) : '')
// }
// console.log(deleteSameNums(arr));

// 4 Task 

// let arrNums = [2,4,5,6,6,3,2,1]

// function Nums(arrNums){
//     let min = arrNums[0]
//     arrNums.filter(value => {
//         if(value < min){
//             min = value
//         }
//         })
//     let max = arrNums[0]
//     arrNums.filter(value => {
//         if(value > max){
//             max = value
//         }
//         })
//     console.log("Eng kichik qiymati:", min,"ga teng");
//     console.log("Eng katta qiymati:",max,"ga teng");
// }
// Nums(arrNums);

// 5 Task berilmagan ???


// 6 Task

// let arr = [2,4,5,6,6,3,2,1]

// function reverseArr(arr) {
//    return arr.reverse()
// }
// console.log(reverseArr(arr));


// 7 Task

// let arr = [5,4,36,7,3,2,9,6,1].filter(value => value % 2 !== 0)
// console.log(arr);
// console.log("Toq sonlarning soni:", arr.length,"ta");

//  8 Task

// let arr= [2,3,4,5,7].filter((value, index) => index % 2 !== 0)
// console.log(arr);

// yoki 8chi Masala bu usulda

// let arr= [2,3,4,5,7]
// function oddNums(arr) {
//     return arr.filter((value, index) => index % 2 !== 0)
// }
// console.log(oddNums(arr));


// 9 Task

// let arr= [2,8,4,5,7]
// function oddNums(arr) {
//     let maxOdd = arr[0]
//    arr.filter((value, index) => {
//         if(index % 2 !== 0 && value >  maxOdd){
//             maxOdd = value
//         }
//         })
//      return maxOdd
// }
// console.log("index toq bolgan eng kattasi:", oddNums(arr));


// 10 Task ???
// let arr = [2,1,3,8,4]
// function normalNum(arr){
//     let min = arr[0]
//     arr.filter(value => {if(value < min){min = value}})

//      let max = arr[0]
//     arr.filter(value => {if(value > max){max = value}})

//     let minNum = arr.indexOf(min)
//     let maxNum = arr.indexOf(max)

//     let indexes = [maxNum, minNum].sort((a,b) => a-b)
//     const first = indexes[0]
//     const last = indexes[1]

//     let res =  arr.map((value,index) => {
//     if(first < index && index < last){
//        return 0
//     }
//     return value
//    })
//    return res
// }
// console.log(normalNum(arr));

// 11 Task

// let enterNum = prompt("Son kiriting") - 0;

// function oddArray(enterNum){
//     let oddNums = []
//     for(let i = 1; i <= enterNum; i++){
//         i % 2 !== 0 ? oddNums.push(i) : ''
//     }
//     return oddNums
// }
// console.log(oddArray(enterNum));

// 12 Task

// let arr = [22,3,5,6,3,2,3]

// function reverseArr(arr){
//     let reverseNms = []
//     // arr.filter(value => reverseNms.unshift(value)) // filter bilan yoki for bilan
//     for(let i = 0; i < arr.length; i++){
//         reverseNms.unshift(arr[i])
//     }
//     return reverseNms
// }
// console.log(reverseArr(arr));


// 13 Task ???
// let arr = [3,5,6,3,2,3]

// function deleteSameNums(arr){
//     let notSameArr = []
//     return arr.filter(value => !notSameArr.includes(value) ? notSameArr.push(value) : '').sort((a,b) => a-b); // togri tartibda joylashtirsek
// }
// console.log(deleteSameNums(arr));

// 14 Task 
// let arr =[12,2,3,4,2]

// function evenIndex(arr){
//     let evenMinNum = arr[0]
//      arr.filter((value, index) => {
//         if(index % 2 == 0 && value < evenMinNum){
//             evenMinNum = value
//         }
//     })
//     return evenMinNum
// }
// console.log("index juft bolgan eng kihik qiymat:", evenIndex(arr));

