/**
 * - argv in nodejs
 * - lib yargs
 */

import yargs from 'yargs';
const { argv } = yargs;

import { split } from '../../helpers.js';


console.log('process argv : ', process.argv);

process.argv.map((data, index) => console.log({ data, index }));

split();

console.log('yargs argv : ', argv);

