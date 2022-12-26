//https://codepen.io/chris22smith/pen/PbBwjp  source for frame css
let number_clicks = 0;

const clickAudio = new Audio(src = "audio/408006__judith136__23.mp3");
window.onload = ()=>{
 start();
}

const start = async()=>{

  await fetchAllImages();

  //00018-img is open doors, 19 is closed
  const canvas = document.querySelector("#canas_viewport");
  placesBeen.push("00019-img.png");
  kickoffImageRenderingToCanvas("images/Hallways/00019-img.png",canvas);
  canvas.onclick = ()=>{
    clickAudio.play();
  }
  const backButton = document.querySelector("#back");
  backButton.onclick=()=>{
    back(canvas);
  }
}

window.onclick = () => {
  const audio = document.querySelector("#audio");
  if (!audio.playing) {
    audio.play();
  }
  number_clicks++;
}

