// Please implement exercise logic here
// const alarm = new Audio(alarm.mp3);
// const beep = new Audio(beep.mp3);
// global variables

// global states

const start = false;
const mode = false;
const pause = true;

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

const inputTimeFields = document.createElement('div');
inputTimeFields.classList.add('input');

const inputHour = document.createElement('input');
inputHour.classList.add('input');
inputHour.id = 'inputhour';
inputHour.setAttribute('type', 'number');
inputHour.setAttribute('maxlength', '2');
inputHour.setAttribute('max', '23');
inputHour.setAttribute('min', '0');

const inputMinute = document.createElement('input');
inputMinute.classList.add('input');
inputMinute.id = 'inputminute';
inputMinute.setAttribute('type', 'number');
inputMinute.setAttribute('maxlength', '2');
inputMinute.setAttribute('max', '59');
inputMinute.setAttribute('min', '0');

const inputSecond = document.createElement('input');
inputSecond.classList.add('input');
inputSecond.id = 'inputsecond';
inputSecond.setAttribute('type', 'number');
inputSecond.setAttribute('maxlength', '2');
inputSecond.setAttribute('max', '59');
inputSecond.setAttribute('min', '1');

inputTimeFields.appendChild(inputHour);
inputTimeFields.appendChild(inputMinute);
inputTimeFields.appendChild(inputSecond);

// when mode button pressed, enter edit mode
const modeLapButton = document.createElement('button');
modeLapButton.classList.add('button');
modeLapButton.innerText = 'Set Time';

const startPauseButton = document.createElement('button');
startPauseButton.classList.add('button');
startPauseButton.innerText = 'Start';
startPauseButton.disabled = true;

const stopResetButton = document.createElement('button');
stopResetButton.classList.add('button');
stopResetButton.innerText = 'Stop';
stopResetButton.disabled = true;

const dataField = document.createElement('div');
dataField.classList.add('data');

// generate helper buttons to adjust time as per watch

// populate the field

watchContainer.appendChild(elapsedTime);
watchContainer.appendChild(inputTimeFields);
watchContainer.appendChild(modeLapButton);
watchContainer.appendChild(startPauseButton);
watchContainer.appendChild(stopResetButton);
watchContainer.appendChild(dataField);

document.body.appendChild(watchContainer);

// declare global variables

let h = 0;
let m = 0;
let s = 0;
let r;

const setTime = () => {
  if (inputHour.value == '' && inputMinute.value == '' && inputSecond.value == '') {
    dataField.innerHTML = 'Input a value';
  } else { startPauseButton.disabled = false;
    stopResetButton.disabled = false;
    modeLapButton.disabled = true;
    inputHour.disabled = true;
    inputMinute.disabled = true;
    inputSecond.disabled = true;

    h = document.getElementById('inputhour').value;
    m = document.getElementById('inputminute').value;
    s = document.getElementById('inputsecond').value;

    console.log(h, m, s);

    elapsedHour.innerHTML = `${Math.floor(h / 10) % 10}${h % 10} : `;
    elapsedMinute.innerHTML = `${Math.floor(m / 10) % 6}${m % 10} : `;
    elapsedSecond.innerHTML = `${Math.floor(s / 10) % 6}${s % 10}`;
  }
};

// assuming input (testing)

let hasStarted = false;

const startTimer = () => {
  // if input time != current time, implies pause
  if (hasStarted) {
    console.log('pause');
    clearInterval(r);
    dataField.innerHTML += `>> ${Math.floor(h / 10) % 10}${h % 10} : ${Math.floor(m / 10) % 6}${m % 10} : ${Math.floor(s / 10) % 6}${s % 10}<br>`;
    hasStarted = false;
    startPauseButton.innerText = 'Resume';
  } else {
    startPauseButton.innerText = 'Pause';
    hasStarted = true;
    // eslint-disable-next-line no-loop-func
    console.log('start/resume');
    r = setInterval(() => {
      console.log(s);

      elapsedHour.innerHTML = `${Math.floor(h / 10) % 10}${h % 10} : `;
      elapsedMinute.innerHTML = `${Math.floor(m / 10) % 6}${m % 10} : `;
      elapsedSecond.innerHTML = `${Math.floor((s / 10) % 6)}${s % 10}`;
      if (h <= 0 && m <= 0 && s <= 0) {
        clearInterval(r);
        // endtimer;
      } else if (h > 0 && m <= 0 && s <= 0) {
      // when minute runs out, pull from hour
        h -= 1;
        m = 60;
        s = 60;
      } else if (m > 0 && s <= 0) {
      // when second runs out, pull from minute
        m -= 1;
        s = 60;
      }s -= 1;

      console.log(s);
    },
    1000);
  }
};

const stopTimer = () => {
  if (hasStarted) {
    // return timer clock to start state
    elapsedHour.innerHTML = '00 : ';
    elapsedMinute.innerHTML = '00 : ';
    elapsedSecond.innerHTML = '00';
    // set timer back to input timing
    h = 0;
    m = 0;
    s = 0;
    stopResetButton.innerText = 'Stop';
    startPauseButton.innerText = 'Start';
    hasStarted = false;
    startPauseButton.disabled = true;
    stopResetButton.disabled = true;
    modeLapButton.disabled = false;
    inputHour.disabled = false;
    inputMinute.disabled = false;
    inputSecond.disabled = false;

    dataField.innerText = '';
  }
  startPauseButton.disabled = true;
  stopResetButton.innerText = 'Reset';
  hasStarted = true;
  console.log('stop');
  clearInterval(r);
};

// increase adds 1 takes a div class

modeLapButton.addEventListener('click', setTime);
stopResetButton.addEventListener('click', stopTimer);
startPauseButton.addEventListener('click', startTimer);
