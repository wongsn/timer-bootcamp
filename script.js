// Please implement exercise logic here
// const alarm = new Audio(alarm.mp3);
// const beep = new Audio(beep.mp3);
// global variables

// global states

const start = false;
const stop = true;
const mode = false;
const pause = true;
const reset = false;

// initialise the objects

const watchContainer = document.createElement('div');
watchContainer.classList.add('container');

const elapsedTime = document.createElement('div');
elapsedTime.classList.add('watch');

const elapsedHour = document.createElement('div');
elapsedHour.classList.add('time');
elapsedHour.querySelector('hour');
elapsedHour.innerHTML = '00 : ';

const elapsedMinute = document.createElement('div');
elapsedMinute.classList.add('time');
elapsedMinute.id = 'minute';
elapsedMinute.innerHTML = '00 : ';

const elapsedSecond = document.createElement('div');
elapsedSecond.classList.add('time');
elapsedSecond.id = 'second';
elapsedSecond.innerHTML = '00';

elapsedTime.appendChild(elapsedHour);
elapsedTime.appendChild(elapsedMinute);
elapsedTime.appendChild(elapsedSecond);

// when mode button pressed, enter edit mode
const modeLapButton = document.createElement('button');
modeLapButton.classList.add('button');
modeLapButton.innerText = 'mode';

const startPauseButton = document.createElement('button');
startPauseButton.classList.add('button');
startPauseButton.innerText = 'Start';

const stopResetButton = document.createElement('button');
stopResetButton.classList.add('button');
stopResetButton.innerText = 'Stop';

const dataField = document.createElement('div');
dataField.classList.add('data');

// generate helper buttons to adjust time as per watch

// populate the field

watchContainer.appendChild(elapsedTime);
watchContainer.appendChild(modeLapButton);
watchContainer.appendChild(startPauseButton);
watchContainer.appendChild(stopResetButton);
watchContainer.appendChild(dataField);

document.body.appendChild(watchContainer);

// declare global variables

const input = []; // [hour,minute,second]

const startPauseState = 'Start';
const stopResetState = 'Stop';

let h;
let m;
let s;
let r;

const setTime = (hour, min, sec) => {
  h = hour;
  m = min;
  s = sec;
};

setTime(0, 0, 10);
// assuming input (testing)

const startTimer = () => {
  // if wanna pause
  if (elapsedHour.innerHTML !== '00 : ' || elapsedMinute.innerHTML !== '00 : ' || elapsedSecond.innerHTML !== '00') {
    console.log('pause');
    clearInterval(r);
    dataField.innerHTML = `${Math.floor(h / 10) % 2}${m % 10} :${Math.floor(h / 10) % 2}${m % 10} :${Math.floor(h / 10) % 2}${m % 10}`;
  } else {
    // eslint-disable-next-line no-loop-func
    console.log('start/resume');
    console.log(h, m, s);
    r = setInterval(() => {
      elapsedHour.innerHTML = `${Math.floor(h / 10) % 2}${m % 10} : `;
      elapsedMinute.innerHTML = `${Math.floor(h / 10) % 2}${m % 10} : `;
      elapsedSecond.innerHTML = `${Math.floor(h / 10) % 2}${m % 10}`;
      if (h <= 0 && m <= 0 && s <= 0) {
        clearInterval(r);
      } else if (h > 0 && m <= 0 && s <= 0) {
      // when minute runs out, pull from hour
        h -= 1;
        m = 60;
        s = 60;
      } else if (m > 0 && s <= 0) {
      // when second runs out, pull from minute
        m -= 1;
        s = 60;
      }
      s -= 1;
    },
    1000);
  }
};

const stopTimer = () => {
  clearInterval(r);
};

// const centralListener = () =>{
//   if(mode == 1){
//     startPauseButton.addEventListener('click',increase);
//     stopResetButton.addEventListener('click',decrease);
//   } else if(mode == 2) {

//   }
// }

// increase adds 1 takes a div class

stopResetButton.addEventListener('click', stopTimer);
startPauseButton.addEventListener('click', startTimer);
