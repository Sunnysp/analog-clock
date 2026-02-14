
const secondsEl = document.querySelector('.seconds');
const minutesEl = document.querySelector('.minutes');
const minuteEl = document.querySelector('.minute');
const hoursEl = document.querySelector('.hour');
for (let second = 0; second < 60; second++) {
    const mSpikel = document.createElement('i');
    const sSpikeEl = document.createElement('i');
    mSpikel.className = 'spike';
    sSpikeEl.className = 'spike';
    mSpikel.style = `--rotate:${-6*second}deg`;
    sSpikeEl.style = `--rotate:${-6*second}deg`;
    mSpikel.setAttribute('data-i', second);
    sSpikeEl.setAttribute('data-i', second)
    secondsEl.append(sSpikeEl);
    minutesEl.append(mSpikel);
}

let minuteAngle = 0
let secondAngle = 0;

function getTime(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    hoursEl.textContent = hours;
    minuteEl.textContent = minutes;
    console.log('seconds ', seconds)
    minuteAngle += seconds === 0 ? 6 : 0;
    console.log('minuteAngle ', minuteAngle);
    minutesEl.style = `--dRotate:${-minuteAngle}deg`;
    secondAngle += 6;
    secondsEl.style = `--dRotate:${-secondAngle}deg`;

}
getTime();
setInterval(getTime, 1000)