const Shake = require('shake.js');

const shakeEvent = new Shake({
  threshold: 15,
  timeout: 1000
});

myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);

const shook = () => {
  alert('SHOOK!');
}
