import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
//avgMpg
let cityTotal = 0;
let highwayTotal = 0;
for (let i=0; i<mpg_data.length; i++) {
    cityTotal = cityTotal + mpg_data[i].city_mpg;
    highwayTotal = highwayTotal + mpg_data[i].highway_mpg;
}
let cityAverage = cityTotal/mpg_data.length;
let highAverage = highwayTotal/mpg_data.length;
//allYearStats
let yearArray = [];
for (let i=0; i<mpg_data.length; i++) {
    yearArray[i] = mpg_data[i].year;
}
//ratioHybrids
let hybridCount = 0;
for (let i=0; i<mpg_data.length; i++) {
    if (mpg_data[i].hybrid) {
        hybridCount++;
    }
}
let hybridRatio = hybridCount/mpg_data.length;

export const allCarStats = {
    avgMpg: {city: cityAverage, highway: highAverage},
    allYearStats: getStatistics(yearArray),
    ratioHybrids: hybridRatio,
};



/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

//makerHybrids, make and id, sort by number of hybrids
//array holds only hybrids
let hybridsOnly = mpg_data.filter(car => car.hybrid = true);

let modelResults = hybridsOnly.reduce((prev, current) => {
    
    const found = prev.find(existing => existing.make === current.make);
    
    if (!found) {
        prev.push({make: current.make, hybrids: [current.id]});
    }
    else {
        found.hybrids.push(current.id);
        //console.log(found); for some reason this outputs the right stuff when you output it
    }
    return prev;
}, []);
//avgMpgByYearAndHybrid



export const moreStats = {
    makerHybrids: modelResults,
    avgMpgByYearAndHybrid: undefined
};
