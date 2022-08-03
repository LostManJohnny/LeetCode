/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	var result,
		max = 0,
		start,
		end,
		sub,
		pal;

	if (s.length <= 1) return s;

	for (start = 0; start < s.length - 1; start++) {
		pal = true;
		for (end = start + 1; end <= s.length; end++) {
			sub = s.substring(start, end);
			pal = isPalindrome(sub);

			if (pal && sub.length > max) {
				result = sub;
				max = result.length;
			}
		}
	}

	return result;

	function isPalindrome(str) {
		var left = 0,
			right = str.length - 1,
			pal = true;

		while (left < right && pal) {
			pal = str.charAt(left) == str.charAt(right);

			if (!pal) return false;

			left++;
			right--;
		}

		return pal;
	}
};

var test1 = "babad";
var test2 = "cbbd";
var test3 = "bb";
var test4 = "a";

// console.log(longestPalindrome(test1));

// console.log(longestPalindrome(test2));

console.log(longestPalindrome(test3));

console.log(longestPalindrome(test4));
