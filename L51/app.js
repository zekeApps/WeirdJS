function mapForEach (arr, fn) {
	var newArr = [];
	for  (var i=0; i<arr.length; i++) {
		newArr.push(
			fn(arr[i])
			)
	};
	return newArr;
}


var arr1 = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
	return (Math.pow(-1, item) > 0);
});

console.log(arr2);

var arrHello = mapForEach(arr1, function(item){
	return ("Hwdy, now is the turn of: " + item);
})
console.log(arrHello);


var isGreaterThanLimit = function(limit, item) {
	return item > limit;
} 

var arr4 = mapForEach(arr1, isGreaterThanLimit.bind(this, 5));
console.log(arr4);

var sqrFn = function (dataArr) {
	return function (item) {
		return (Math.pow(-1, item) > 0);
	}.bind(this.item);
};

var arr5 = mapForEach(arr1, sqrFn(arr1));
console.log(arr5)