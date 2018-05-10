// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	var result = [];

	if (Array.isArray(obj)) {
		_.forEach(obj, function(x) {
			result.push(stringifyJSON(x));
		});
		return `[${result.join(',')}]`;
	}

  	if (obj === null) return 'null';
	if (typeof obj === 'string') return `"${obj}"`;
	if (typeof obj === 'number', 'boolean') return obj.toString();

};


// unpassed tests..

// stringifyJSON({});                       // '{}'
// stringifyJSON({'a': 'apple'});           // '{"a":"apple"}'
// stringifyJSON({'foo': true, 'bar': false, 'baz': null});
// stringifyJSON({'boolean, true': true, 'boolean, false': false, 'null': null });
// stringifyJSON({'a': {'b': 'c'}});
// stringifyJSON({'a': ['b', 'c']});
// stringifyJSON([{'a': 'b'}, {'c': 'd'}]);
// stringifyJSON({'a': [], 'c': {}, 'b': true});