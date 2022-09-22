import { arrayNumbers, arrayCars } from './data.js';
import sortData from './myfunction.js';

const fnCombinateThem = () => {
    console.log('1. Before calling the the sortData function : ', arrayNumbers);
    console.log('2. After sorting', sortData(arrayNumbers));
    console.log('3. Before calling the the sortData function : ', arrayCars);
    console.log('4. After sorting : ', sortData(arrayCars));
}

fnCombinateThem();