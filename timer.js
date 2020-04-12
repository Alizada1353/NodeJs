const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    console.log(`Waiting ${currentTime / 1000} seconds.`)
}

console.log(`setting a ${waitTime / 100} seconds delay.`)

const timerFinished = () => {
    clearInterval(interval);
    console.log('done!')};

const interval =  setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);