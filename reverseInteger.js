/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	var reversed = "",
		negative = x < 0,
		strX;

	x = negative ? x * -1 : x;

	strX = x.toString();

	for (var i = x.length - 1; i >= 0; i--) {
		reversed += x.charAt(i);
	}

	reversed = parseInt(reversed);

	reversed = negative ? reversed * -1 : reversed;

	return reversed;
};

var tests = [123, -123];

for (test in tests) {
	console.log(reverse(test));
}
