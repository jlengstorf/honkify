const audio = new Audio(
  "https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3"
);

export default function useHonks() {
  const honk = cb => event => {
    audio.play();
    cb(event);
    return false;
  };

  return honk;
}
