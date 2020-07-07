import { split } from './../helpers.js';

/**
 * - Встроенный движок v8.
 *
 * - Преимущества
 *    - Один язык для всего front, back, субд
 *    - Один формат данных JSON
 *    - Долгая жизнь приложений
 *
 * - Применение
 *    - Серверы
 *    - Клиенты, desktop
 *    - Микроконтроллеры
 *    - Серверные срипты
 *    - Тестирование (unit tests, e2e, integration)
 *
 * - Встроенное API.
 *    - https://nodejs.org/docs/latest/api/
 *    - https://nodejs.org/api/globals.html
 *
 */

/* =========== VARIABLES =========== */

/* deprecated */
var param1 = 'var variable';

/* stable */
let param2 = 'let variable';
const param3 = 'const variable';

console.log(param1);
console.log(param2);
console.log(param3);

param1 = 'changed var variable';
param2 = 'changed let variable';
// param3 = 'changed const variable';

split();

/* =========== TYPES =========== */

const isString = 'string';
const isNumber = 0;
const isNaN = NaN;
const isUndefined = undefined;
const isNull = null;
const isObject = {};
const isArray = [];
const isBool = true;
const isFunction = () => {};

console.log('isString : ', typeof isString);
console.log('isNumber : ', typeof isNumber);
console.log('isNaN : ', typeof isNaN);
console.log('isUndefined : ', typeof isUndefined);
console.log('isNull : ', typeof isNull);
console.log('isObject : ', typeof isObject);
console.log('isArray : ', typeof isArray);
console.log('isBool : ', typeof isBool);
console.log('isFunction : ', typeof isFunction);

split();

/* =========== FUNCTIONS =========== */

/**
 * - имеет свойство this
 * - имеет обьект arguments
 */
function fHello (name) {
  console.log(name);
}

/**
 * - НЕ имеет свойство this
 * - НЕ имеет обьект arguments
 */
const afHello = name => console.log(`hello ${name}`);
const afHello2 = name => {
  console.log(`hello ${name}`)
};

fHello('Josh');
afHello('Dave');
afHello2('Dave');

split();

/* =========== DESTRUCTURING =========== */

const numericObject = {
  first: '1',
  second: '2',
  third: '3',
};

const { first, second, third } = numericObject;

console.log('destructured object : ', { first });
console.log('destructured object : ', { second });
console.log('destructured object : ', { third });

const bindedObj = {
  ...numericObject,
  fourth: '4',
};

console.log('binded object : ', bindedObj);

const destructuredArgs = ({ first, second, third }) => console.log('destructured function args : ', { first, second, third });

destructuredArgs(numericObject);

split();

/* =========== SPREAD =========== */

const numericArray = [1, 2, 3];

const [firstIndex, secondIndex] = numericArray;

console.log('destructured array : ', { firstIndex });
console.log('destructured array : ', { secondIndex });

const bindedArray = [...numericArray, 4];

console.log('binded array : ', bindedArray);

const collectedSpreadFunc = (...someArgs) => console.log('collected all args in one by spread : ', someArgs);
collectedSpreadFunc('one', 'two', 'three');

const spreadedFunc = (one, two, three) => console.log('function with given args by spread : ', { one, two, three });
spreadedFunc(...numericArray);

split();
