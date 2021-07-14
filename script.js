// Please implement exercise logic here

// initialise the objects

const watchContainer = document.createElement('div');
watchContainer.classList.add('container');

const elapsedTIme = document.createElement('div');
elapsedTIme.classList.add{'watch'};
elapsedTIme.innerHTML = '00:00:00';

const elapsedHour = document.createElement('div');
elapsedHour.classList.add('time');
elapsedHour.innerHTML = '00';

const elapsedMinute = document.createElement('div');
elapsedMinute.classList.add('time');
elapsedMinute.innerHTML = '00';

const elapsedSecond = document.createElement('div');
elapsedSecond.classList.add('time');
elapsedSecond.innerHTML = '00';

elapsedTIme.appendChild(elapsedHour);
elapsedTIme.appendChild(elapsedMinute);
elapsedTIme.appendChild(elapsedSecond);

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

watchContainer.appendChild(modeLapButton);
watchContainer.appendChild(elapsedTime);
watchContainer.appendChild(startPauseButton);
watchContainer.appendChild(stopRestButton)
watchContainer.appendChild(dataField);

document.body.appendChild(watchContainer);

// declare global variables

let hour;
let minute;
let second;

const input = []; // [hour,minute,second]

let startPauseState = 'Start';
let stopResetState = 'Stop';

let colon;

const generateCountdownTimer = (time) => {
  elapsedTIme.innerHTML = `${hour}${colon}${minute}${colon}${second}`;
}

const startTimer = (time) {
  while (second !=0){
    second-=1;
setInterval(()=> {elapsedSecond.innerText = second}, 1000);
  }

// input are .innertext of corresponding divs
// once timer starts, check elapsedSeconds
// if elapsedSecond === 0, check elapsedMinute && elapsedHour
  // if elapsedHour > 0 && elapsedMinute > 0, elapsedMinute --, elapsedSecond = 59;
  // else if elapsedHour > 0 && elapsedMinute === 0, elapsedMinute = 59, elapsedSecond = 59;
// else {
  
// }

}
