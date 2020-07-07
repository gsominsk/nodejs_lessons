/**
 * - https://nodejs.org/api/globals.html#globals_module
 */

const say = require('./say');
const { hi, bye } = require('./say');

say.hi();
say.bye();

say.hi('Josh');
say.bye('Josh');

hi();
bye();