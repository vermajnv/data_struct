const myArray1 = [
    [2, 4, 5],
    [4, 6, 7],
    [9, 6, 4]
];

const myArray2 = [
    [2, 3, 5],
    [4, 6, 6],
    [2, 6, 4]
];
// sum2DArray will splite the matrix in 1d array like 
// myArray1=>[2,4,5] and myArray2=>[2,3,5]

function sum2DArry(myArray1, myArray2) {
    return myArray1.map(function(item, index) {
        return sumSplitedArry(item, myArray2[index]);
        // console.log('arr3',arr3);
    });
}

//sumSplitedArry will sum two 1d array
function sumSplitedArry(arr1, arr2) {
	return arr1.map(function(item,index) {
		return item + arr2[index];
	});
}
const Arr3 = sum2DArry(myArray1, myArray2);
console.log(Arr3.join('\n' + '\n'));