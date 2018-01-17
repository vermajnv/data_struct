const myArray1 = [3,4,5,6];
const myArray2 = [4,5,2,6];

function sumArry(myArray1 ,myArray2) {
	return myArray1.map(function(item,index){
		return item + myArray2[index];
	});
}

const myArry3 = sumArry(myArray1, myArray2);
console.log(myArry3);
