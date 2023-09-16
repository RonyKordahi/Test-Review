/* Question 02

Write a function which will split an array into two arrays (i.e. partition it).

It will take two parameters, the first is an array of Integer values, and the second will be a callback which will return a boolean. If the callback returns true for an element, it should be placed into the left array, otherwise it should be placed into the right array.

Examples:

- partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],n => n % 2 === 0)
    => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
- partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0)
    => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]

*/

const partition = function (arr, callback) {
    const leftArray = [];
    const rightArray = [];

    arr.forEach((number) => {

        if (callback(number)) {
            leftArray.push(number);
        }
        else {
            rightArray.push(number);
        }
    })

    return [leftArray, rightArray];
};

console.log(partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],n => n % 2 === 0));
console.log(partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0));