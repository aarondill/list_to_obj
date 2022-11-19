/**
 *
 * @param {String[][]} arr
 * @returns {Object[]} arr converted to a list of object.
 *
 * @description creates a list of objects from a 2 dimensional array.
 * The 0th element is assumed to be property names
 * and each subsequent array is used as it's own object
 */
function arrToObj(arr) {
	if (!Array.isArray(arr) || !Array.isArray(arr[0]))
		throw new TypeError(
			"arrToObj expects an array with at least one array element"
		);
	if (arr.length < 2) return [];
	const [properties, ...dataLists] = arr;
	const r = dataLists.map(values => {
		const obj = {};
		for (let i = 0; i < properties.length; i++)
			i < values.length && (obj[properties[i]] = values[i]);
		return obj;
	}, []);

	return r;
}
if (typeof module !== "undefined" && typeof module.exports !== "undefined")
	module.exports = arrToObj;
else globalThis.arrToObj = arrToObj;
