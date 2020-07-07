// import fs from 'fs';
import path from 'path';

/**
 * - fs
 *    - stat
 *    - read
 *    - write
 *    - append
 *
 * - path
 * - __dirname
 * - __filename
 *
 * r+ — открыть файл для чтения и для записи.
 * w+ — открыть файл для чтения и для записи, установив указатель потока в начало файла. Если файл не существует — он создаётся.
 * a — открыть файл для записи, установив указатель потока в конец файла. Если файл не существует — он создаётся.
 * a+ — открыть файл для чтения и записи, установив указатель потока в конец файла. Если файл не существует — он создаётся.
 *
 * - https://nodejs.org/api/fs.html
 */

const url = new URL('file://roRead.txt');

console.log('__dirname ', __dirname);
console.log('__filename ', __dirname);

/* =========== FS OPEN =========== */

// fs.open('./toRead.txt', 'r+', (err, fd) => {
//   console.log('fs open : ', stats);
// });
//
// const fd = fs.openSync('./toRead.txt', 'r+');
//
// console.log('fs open sync : ', fd);

/* =========== FS STAT =========== */

// fs.stat('./toRead.txt', (err, stats) => {
//   console.log('fs stat : ', stats);
// });
//
// const stats = fs.statSync ('./toRead.txt');
//
// console.log('fs stat sync : ', stats);

/* =========== FS READ =========== */

// fs.readFile('./toRead.txt', (err, data) => {
//   console.log(data);
// });
//
// const read = fs.readFileSync('./toRead.txt', 'utf8');
//
// console.log('fs stat read : ', read);

/* =========== FS READ =========== */

// const content = 'hi';
// fs.writeFile('./newFile.txt', content, (err) => {
//   //файл записан успешно
// })
//
// fs.writeFileSync('./newFile.txt', content);

/* =========== FS READ =========== */

// const content = '\nSome content!';
// fs.appendFileSync('./newFile.txt', content);
// fs.appendFile('./newFile.txt', content, (err) => {});

/* =========== PATH =========== */

console.log(path.dirname());
console.log(path.basename());
console.log(path.extname());
