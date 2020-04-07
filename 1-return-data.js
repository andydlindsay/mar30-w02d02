const higherOrderFn = (cb) => {
  const data = {
    name: 'Alice'
  };

  console.log('before the timeout');

  setTimeout(() => {
    data.name = 'Bob';
    cb(data);
    // return data;
  }, 1000);

  console.log('after the timeout');
  // return data;
};

const callback = (val) => {
  console.log('inside the callback the value is:', val);
  return val;
};

console.log('before the main call');

const returnValue = higherOrderFn(callback);
console.log('returnValue:', returnValue);

console.log('after the main call');
