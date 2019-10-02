const honkify = () => {
  if (typeof window === 'undefined') {
    console.warn('honkify only works in the browser.');
    console.warn('I mean... honk!');
    return;
  }

  const audio: HTMLAudioElement = new Audio(
    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3',
  );

  const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');

  const honk = (event: Event) => {
    event.preventDefault();
    event.stopImmediatePropagation();

    audio.play();

    return false;
  };

  links.forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', honk);
  });

  const dehonk = () => {
    links.forEach((link: HTMLAnchorElement) => {
      link.removeEventListener('click', honk);
    });
  };

  return dehonk;
};

export default honkify;
