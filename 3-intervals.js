let counter = 0;

const interval = setInterval(() => {
  counter++;
  console.log('hello world ' + counter);

  // if (counter > 10) {
  //   clearInterval(interval);
  // }
}, 300);

setTimeout(() => {
  clearInterval(interval);
}, 5000);
