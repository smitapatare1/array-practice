//splice() method is used to add elements and also delets the elemets.....

//splice(P1,P2,P3)
//P1==> index
//P2==>no. of elements to delete
//P3==>elements to insert

//🛑 for Deletion
//ex.1
const arr = ["mouse","laptop","keyboard","USB","pen Drive"]
console.log(arr)
arr.splice(2,1)                                                  //start delete from index 2 and 1 delete(keyboard)
console.log(arr)

//output
//[ 'mouse', 'laptop', 'keyboard', 'USB', 'pen Drive' ]
//[ 'mouse', 'laptop', 'USB', 'pen Drive' ]

//ex.2
const array = ["mouse","laptop","keyboard","USB","pen Drive"]
console.log(array)
array.splice(2,2)                                                  //start delete from index 2 and 2 delete(keyboard,mouse)
console.log(array)

//output
//[ 'mouse', 'laptop', 'keyboard', 'USB', 'pen Drive' ]
//[ 'mouse', 'laptop', 'pen Drive' ]


//🛑 for Insertion
//ex.1
const arr2 = ["mouse","laptop","keyboard","USB","pen Drive"]
console.log(arr2)
arr2.splice(2,2,"monitor","mouse pad");                                                 //start from 2nd index, 2 elements are delete and 2 ele.(Monitor,MousePad)
console.log(arr2)

//output
//[ 'mouse', 'laptop', 'keyboard', 'USB', 'pen Drive' ]
//[ 'mouse', 'laptop', 'monitor', 'mouse pad', 'pen Drive' ]



//ex.2
const arr3 = ["mouse","laptop","keyboard","USB","pen Drive"]
console.log(arr3)
arr3.splice(2,0,"monitor","mouse pad");                                                 //we can  also add elements without deletion of elements..
console.log(arr3)


//output
//[ 'mouse', 'laptop', 'keyboard', 'USB', 'pen Drive' ]
//[  'mouse',  'laptop', 'monitor', 'mouse pad',  'keyboard', 'USB', 'pen Drive']