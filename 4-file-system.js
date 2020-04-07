const fs = require('fs');

const fileData = fs.readFileSync('./my-doc.txt', { encoding: 'utf8' });

console.log(fileData);

fs.readFile('./my-dc.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;
  console.log('finished async read');
});

console.log('down here!');
