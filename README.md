# W02D02 - Asynchronous Control Flow

### To Do
* [x] Breakout! 20 minutes
* [x] Asynchronous Programming
* [x] Blocking vs Non-Blocking
* [x] `setTimeout` and `setInterval`
* [ ] File System Functions (`fs`)

### Breakout (20 minutes)
* In groups, run through the questions in this [gist](https://gist.github.com/andydlindsay/d586198046d7074d83e371ead76b4f4b)

### Asynchronous JS
- JavaScript is Synchronous
- One line of code executes only after the previous one is done
- Single threaded

```js
const name = 'Alice';
console.log(name);
```

- Long running processes are an issue

### Blocking vs Non-Blocking
* Code that takes a long time to run and stops other code from executing is blocking
* Code that takes a long time to run and doesn't stop the code around it, is non-blocking


# NOTE: That callbacks don't always mean async code

```js
array.map()
array.filter()
array.forEach()
```















### Useful Links
* [MDN Async Concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
* [Node Docs: Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
* [Node Docs: fs](https://nodejs.org/api/fs.html)
