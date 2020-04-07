const stop = 10000;

const startTime = new Date().getTime();

for (let i = 0; i < stop; i++) {
  const date = new Date();
  console.log(date);
}

const endTime = new Date().getTime();
const duration = endTime - startTime;

console.log(`That process took ${duration}ms`);
