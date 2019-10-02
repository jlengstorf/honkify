const honkify = () => {
  if (typeof window === 'undefined') {
    console.warn('honkify only works in the browser.');
    console.warn('I mean... honk!');
    return;
  }

  const audio = new Audio(
    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3',
  );

  const everythingClickable = document.querySelectorAll('a, button, input[type="submit"], input[type="reset"], input[type="button"]');

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
