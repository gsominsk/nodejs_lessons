import _ from './glob.js'
import { split } from '../helpers.js'
import dotenv from 'dotenv'

dotenv.config();

/**
 * - module variables
 * - global variables
 *
 * - process, process.env
 * - dotenv
 *
 * - https://nodejs.org/api/globals.html#globals_global
 * - https://nodejs.org/api/process.html
 */

/* =========== GLOBAL VARIABLES =========== */

// console.log('global object : ', global);
// split();

const localVariable = 'local variable';

console.log('local variable : ', localVariable);
console.log('global variable : ', global.myName);

split();

/* =========== PROCESS VARIABLES =========== */

// console.log(process);
// split();

console.log(process.env);
console.log('process env variable LESSON : ',process.env.LESSON);

/* =========== PROCESS VARIABLES =========== */

