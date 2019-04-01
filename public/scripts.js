(() => {
  document.ready(() => {
    const Shake = require('shake.js');
    let appDirections = document.querySelector('.instructions');
    let appAnswer = document.querySelector('.answer');

    appDirections.innerText = 'Hit the space bar to reveal your answer!'

    window.addEventListener('click', () => {
      console.log('CLICKED!');
    })

    document.querySelector('button').addEventListener('click', () => {
      console.log('You clicked the button!')
    })


    // const shakeEvent = new Shake({
      //   threshold: 15,
      //   timeout: 1000
      // });
      const shakeEvent = new Shake();

      myShakeEvent.start();

      window.addEventListener('shake', shakeEventDidOccur, false);

      const shook = () => {
        alert('SHOOK!');
      }

      console.log('LOADED!');

  })
})()
