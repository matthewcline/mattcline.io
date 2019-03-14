function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	if (arr.length === 0) {
		return false;
	}
	var ref = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== ref) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function maxVal(arr) {
	if (arr.length === 0) {
		return null;
	}
	max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		var val = arr[i];
		if (val > max) {
			max = val;
		}	
	}
	return max;
}