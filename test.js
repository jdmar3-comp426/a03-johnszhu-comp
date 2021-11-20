//import functions
import {sumToString} from "./src/mild/mild_1.js";
import {getIncreasingArray} from "./src/mild/mild_1.js";
import {countArray} from "./src/mild/mild_1.js";
import {maxAndMin} from "./src/mild/mild_1.js";

//testing sumToString
console.log('Testing sumToString(3,4) :');
console.log(sumToString(3,4));

//testing getIncreasingArray
console.log('Testing increasingArray(3,7) :');
console.log(getIncreasingArray(3,7));

//testing maxAndMin
console.log('Testing maxAndMin("9879846548") :');
console.log(maxAndMin("9879846548"));

//testing countArray
console.log('Testing countArray(getIncreasingArray(5,26)) :');
console.log(countArray(getIncreasingArray(5,26)));
console.log('Testing countArray([ 24, 5,6, 17, 71, 8, 6, 6, 7, 5, 23, 24, 8])) :');
console.log(countArray([ 24, 5,6, 17, 71, 8, 6, 6, 7, 5, 23, 24, 8]));
 