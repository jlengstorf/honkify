const honkify = (elementToHonkify = false) => {
  if (typeof window === 'undefined') {
    console.warn('honkify only works in the browser.');
    console.warn('I mean... honk!');
    return;
  }

   //check if the user is on iOS Safari, if they are, we initiate the safari audio "hack"
  const ua = window.navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

  const audio = new Audio(
    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3',
  );

  /**
   * if the platform is iOS Safari, we quickly play, pause, reset the audio object
   * this allows it to be playable the next time an user clicks a link
   */

  if (iOSSafari) {
    console.log('Honk! This is safari')
    document.body.addEventListener('touchstart', () => {
      audio.play();
      audio.pause();
      audio.currentTime = 0;
    })
  }

  const links = (elementToHonkify || document).querySelectorAll('a');

  const honk = event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    audio.play();

    return false;
  };

  links.forEach(link => {
    link.addEventListener('click', honk);
  });

  const dehonk = () => {
    links.forEach(link => {
      link.removeEventListener('click', honk);
    });
  };

  return dehonk;
};

export default honkify;
