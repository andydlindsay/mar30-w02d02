const delays = [13, 24, 182, 5000, 3, 4242, 1000];

for (const delay of delays) {
  setTimeout(() => {
    console.log(delay);
  }, delay);
}
