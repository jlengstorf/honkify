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
    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3'
  );
  const defaultSelectors = [
    'a',
    'button',
    'input[type="submit"]',
    'input[type="reset"]',
    'input[type="button"]'
  ];

  if (iOSSafari) {
    console.log('Honk! This is safari');
    document.body.addEventListener('touchstart', () => {
      audio.play();
      audio.pause();
      audio.currentTime = 0;
    });
  }

  const everythingClickable = Array.from(
    document.querySelectorAll(defaultSelectors.join(','))
  ).filter(item => !item.classList.contains('no-honk'));

  const honk = event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    audio.play();

    return false;
  };

  everythingClickable.forEach(link => {
    link.addEventListener('click', honk);
  });

  const dehonk = () => {
    everythingClickable.forEach(link => {
      link.removeEventListener('click', honk);
    });
  };

  return dehonk;
};

export default honkify;
