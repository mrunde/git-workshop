/**
 * A global variable which can be changed.
 * @type {number}
 */
const SOME_GLOBAL_CONSTANT = 20;

/**
 * Calculate something and return the result.
 *
 * @param {number} a Some parameter.
 * @returns {number} The result of the calculation.
 */
function calc(a) {
    return a * SOME_GLOBAL_CONSTANT;
}

/**
 * A method that is called directly and will log a calculated number and return some value.
 * @returns {string}
 */
function doSomething() {
    const NEVER_CHANGE_THIS_VALUE = "do not change this value!!!";

    const randomNumber = calc(Math.random()) + 1;
    console.log(randomNumber);

    return NEVER_CHANGE_THIS_VALUE;
}

alert(doSomething());
