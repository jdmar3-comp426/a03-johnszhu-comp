//import functions
import {sumToString} from "./src/mild/mild_1.js";
import {getIncreasingArray} from "./src/mild/mild_1.js";
import {countArray} from "./src/mild/mild_1.js";
import {maxAndMin} from "./src/mild/mild_1.js";
import {identifyVariable, removeKey, removeKeys} from "./src/mild/mild_2.js";
import {identifyArray} from "./src/mild/mild_2.js";
import {getStatistics} from "./src/medium/medium_1.js";
import { allCarStats, moreStats } from "./src/medium/medium_2.js";
import { searchByYear, searchHighPower, searchMpg } from "./src/medium/medium_3.js";
import mpg_data from "./src/medium/data/mpg_data.js";
import {searchName} from "./src/medium/medium_3.js";
import { multiplyBy, repeat, repeatDemo } from "./src/spicy/spicy_9.js";

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
 
//testing identifyVariable
console.log('Testing identifyVariable(5)');
console.log(identifyVariable(5));
console.log('Testing identifyVariable(true)');
console.log(identifyVariable(true));
console.log('Testing identifyVariable(blubber)');
console.log(identifyVariable("blubber"));
console.log('Testing identifyVariable(null)');
console.log(identifyVariable(null));

//testing identifyArray
console.log('Testing identifyArray(["some", 3, [3, 4], false])');
console.log(identifyArray(['some', 3, [3, 4], false]));

//testing removeKey
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
console.log('Testing removeKey(obj, password)');
console.log(obj);
console.log(removeKey(obj, 'password'));
console.log(obj);

//testing removeKeyNondestructive
let objec = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
console.log('Testing removeKeyNondestructive(objec, password)');
console.log(objec);
console.log(removeKey(objec, 'password'));
console.log(objec);

//testing removeKeys
console.log('Testing removeKeys');
let ob = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 console.log(ob);
 console.log(removeKeys(ob, ['password', 'age']));
 console.log(ob);
 
//testing getStatistics
console.log('Testing getStatistics');
console.log(getStatistics([3,2,4,5,5,5,2,6,7]));

//testing allCarStats
console.log('Testing allCarStats');
console.log(allCarStats);

//testing moreStats
console.log('Testing moreStats');
console.log(moreStats);

//testing searchHighPower
console.log('Testing searchHighPower');
console.log(searchHighPower(mpg_data, 250, 250));

//testing searchMpg
console.log('Testing searchMPG');
console.log(searchMpg(mpg_data, 20, 26));

//testing searchName
console.log('Testing searchName');
console.log(searchName(mpg_data, 'audi'));

//testing searchYear
console.log('Testing searchYear');
console.log(searchByYear(mpg_data, [2012, 2013, 2014]));

//testing repeat
console.log('Testing repeat');
console.log(repeat(repeatDemo, 10));

//testing multiplyBy
console.log('Testing multiplyBy(2)');
console.log(multiplyBy(2));
