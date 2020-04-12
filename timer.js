const waitTime = 3000;
console.log(`setting a ${waitTime / 100} seconds delay.`)

const timerFinished = () => console.log('done!');

setTimeout(timerFinished, waitTime);