/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
    => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
    => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function (arr) {
    const createdObject = {};

    arr.forEach((element) => {

        if(Array.isArray(element[1])) {
            createdObject[element[0]] = deepArrayToObject(element[1]);
        }
        else {
            createdObject[element[0]] = element[1];
        }

    });

    return createdObject;
};

console.log(deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]]));
console.log("=============================")
console.log(deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]));