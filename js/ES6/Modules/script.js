// you can also change the name "myName" while importing if you have changed it while exporting
// import {usersData,myName as myNames} from './usersData.js';
import {usersData,myName,greet} from './usersData.js';
import productsData from './productsData.js';
import * as math from './math.js';
console.log(productsData);
console.log(usersData);
console.log(myName);
greet();
console.log(math.pi, math.add(1,2));