// slice() method use to breck the array..


//  eg.1
//slice() method does not make changes in original array..
const arr= ["A","B","C","D","E"]
let pieceArray = arr.slice(2)
console.log(pieceArray)                        // brecked array
console.log(arr)                                  //original array

//output
//     [ 'C', 'D', 'E' ]                                           
//     [ 'A', 'B', 'C', 'D', 'E' ]                      //original array does not changed




//eg.2
//we can also pass the ending position
const array = ["A","B","C","D","E"]
let piecearr=array.slice(1,3)
console.log(piecearr)

//output
//    [ 'B', 'C' ]