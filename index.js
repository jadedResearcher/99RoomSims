//https://codepen.io/chris22smith/pen/PbBwjp  source for frame css
let number_clicks = 0;
window.onload = ()=>{
  //00018-img is open doors, 19 is closed
  kickoffImageRenderingToCanvas("images/Hallways/00019-img.png",document.querySelector("#canas_viewport"));
}

window.onclick = () => {
  const audio = document.querySelector("#audio");
  if (!audio.playing) {
    audio.play();
  }
  number_clicks++;
}