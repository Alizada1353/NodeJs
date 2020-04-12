/**Path module */
const path = require('path');
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads, '\n\n');

/**Util module */
const util = require('util');
util.log(path.basename(__filename));
util.log('^ Name of the current file. \n\n')

/**V8 module */
const v8 = require('v8');
util.log(v8.getHeapSpaceStatistics());