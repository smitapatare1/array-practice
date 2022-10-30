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