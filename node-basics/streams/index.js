const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/transfertoserver.txt');


readStream.on('data', chunk => {
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);