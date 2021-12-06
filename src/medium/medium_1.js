import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for (let i=0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort((a,b) => {
        if (a<b) {
            return -1;
        }
        if (a>b) {
            return 1;
        }
        return 0;
    });
    var median = array[array.length/2];
    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    array.sort((a,b) => {
        if (a<b) {
            return -1;
        }
        if (a>b) {
            return 1;
        }
        return 0;
    });
    var min = array[0];
    var median = 999999999
    var max = array[array.length-1];
    var sum = 0;
    for (let i=0; i<array.length; i++) {
        sum = sum + array[i];
    }
    var mean = sum/(array.length);
    var varSum = 0;
    for (let i = 0; i<array.length; i++) {
        let difference = array[i] - mean;
        let point = difference * difference;
        varSum = varSum + point;
    }
    var variance = varSum / array.length;
    var length = array.length;
    if ((length % 2) == 1) {
        //odd length
        median = array[(array.length)/2 - .5];
    }
    else {
        //even length
        var median = array[(array.length)/2];
    }
    var standard_deviation = Math.sqrt(variance);
    return {
        length: length,
        sum: sum,
        mean: mean,
        median: median,
        min: min,
        max: max,
        variance: variance,
        standard_deviation: standard_deviation
    };

}

