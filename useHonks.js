export default function useHonks() {
  let audio = null;
  
  if (typeof window !== 'undefined') {
    audio = new Audio(
      "https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3"
    );
  }

  if (typeof window === 'undefined') {
    console.warn('honkify only works in the browser.');
    console.warn('I mean... honk!');
  }
  
  const honk = cb => event => {
    if (audio) {
      audio.play();
    }
    cb(event);
    return false;
  };

  return honk;
}
