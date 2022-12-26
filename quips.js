//when done, want to use this to have specifics things for specific images


const heart = new Audio(src = "audio/heartbeat.mp3");
const phone1 = new Audio(src = "audio/phone_glitch1.mp3");
const phone2 = new Audio(src = "audio/phone_glitch2.mp3");
const phone3 = new Audio(src = "audio/phone_glitch3.mp3");

//why yes, this IS a leak. thank you for noticing :) :) :)
const shepard = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/zampanio_is_a_really_good_game.mp3")
const circus = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/circus.mp3");
const weird_ambient = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/weirdambient.ogg")
const robot = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/corruptab.mp3")
const hospital = new Audio("audio/answerer.mp3")
const dog = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/lost_your_dog.mp3");
const home = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/dont_take_me_home.mp3");
const muzak1 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2001%20Mall%20Open.mp3")
const muzak2 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2002%20Sale%20Of%20The%20Seventies.mp3")
const muzak3 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2003%20Third%20Floor%20Spending%20Spree.mp3")
const muzak4 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2004%20Food%20Court%20Calling.mp3")
const muzak5 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2005%20Grocery%20Grabbing.mp3")
const muzak6 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2006%20The%20Fountain%20Of%20Life.mp3")
const muzak7 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2007%20Phonebooth%20Call%20To%20Home.mp3")
const muzak8 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2008%20Restroom%20Retreat.mp3")
const muzak9 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2009%20Impulse%20Purchase%20(Part%201).mp3")
const muzak10 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2010%20Cash%20Or%20Cheque.mp3")
const muzak11 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2011%20Checkout%202%20Now%20Open.mp3")
const muzak12 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2012%20Impulse%20Purchase%20(Part%202).mp3")
const muzak13 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2013%20Parking%20Lot%20Lost.mp3")
const muzak14 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2014%20Mall%20Closed.mp3")
const muzak15 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/nondescriptive_title_w_Mastering%20(2).mp3")
const muzak16 = new Audio("http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Finish%20(1).mp3")


let audioPlaying = [];


const spookyAudio = [heart, weird_ambient, robot, phone1, phone2, phone3, hospital, circus];
const glitchAudio = [...spookyAudio, shepard, hospital, dog, home, muzak2, muzak1, muzak3, muzak4, muzak5, muzak6, muzak8, muzak7, muzak9, muzak16, muzak15, muzak14, muzak13, muzak12, muzak11, muzak10]


const genericQuipsRaw =
  `What are you looking for?
Are you sure you haven't been here before?
Is this where you remember being?
When is a door not a door?
What is a door, really.
Are you sure that was a door?
What was that?`

const genericHallwayQuipsRaw =
  `How far do you think these hallways go?
Ever forward, that's how you make progress. Right?`

const genericRoomQuipsRaw =
  `Have you been in this room before?
Was this always a room?
Wasn't...wasn't this a hallway before?`

const genericQuips = genericQuipsRaw.split("\n")
const genericRoomQuips = genericRoomQuipsRaw.split("\n")
const genericHallwayQuips = genericHallwayQuipsRaw.split("\n")

const intentional_quips = {
  "00019-img2.png": { text: "It's festive!", audio: circus }
}

applyGlitch = (canvas) => {
  console.log("JR NOTE: applying glitch")
  const frame = document.querySelector(".frame");
  const glitch = createElementWithClassAndParent("div", frame);
  glitch.id = "glitch";
  glitch.style.backgroundImage = `url(${canvas.toDataURL()})`;
  glitch.style.width = getRandomNumberBetween(1, 50) + "px";
  glitch.style.height = getRandomNumberBetween(1, 50) + "px";
  const normalWidth = parseInt(glitch.style.width);
  const normalHeight = parseInt(glitch.style.height);
  const x = getRandomNumberBetween(0, 768);
  const y = getRandomNumberBetween(0, 512) ;
  glitch.style.backgroundPositionX = "-"+x + "px";
  glitch.style.backgroundPositionY = "-"+y + "px";
  glitch.style.top = y +13+ "px";
  glitch.style.left = x +13+ "px";

  glitch.onclick = () => {
    const audio = pickFrom(glitchAudio);
    audioPlaying.push(audio);
    audio.play();
  }

  fuckShitUP("1", glitch)

}

fuckShitUP = (time, ele) => {
  const mildAmount = getRandomNumberBetween(0, 5);
  const extremeAmount = getRandomNumberBetween(0, 5);
  const normalWidth = parseInt(ele.style.width);
  const normalHeight = parseInt(ele.style.height);
  const extremeOptions = [`background-position-y: ${getRandomNumberBetween(0, normalHeight)}`,
   `background-position-x: ${getRandomNumberBetween(0, normalWidth)}`, 
   `transform: rotate(${Math.random()}turn);`,
   `opacity: ${0.5+Math.random()*2}`, 
   `filter: brightness(.75);`, `filter: brightness(1.15);`, 
   `filter: hue-rotate(180);`, `width: ${normalWidth + mildAmount}px;`,
    `height: ${normalHeight + mildAmount}px;`, 
    `height: ${normalHeight - mildAmount}px;`,
     `width: ${normalHeight - mildAmount}px;`, 
      `translate(${mildAmount}px, ${mildAmount}px);`,
       `translate(${mildAmount}px);`, `translate(0px, ${mildAmount}px);`];
  const options = extremeOptions;
  const animation_name = "no" + getRandomNumberBetween(0, 999999);
  const inadvisable_hacked_css_keyframe = `
 @keyframes ${animation_name} {
  0% { ${pickFrom(options)} }
  10% { ${pickFrom(options)} }
  20% { ${pickFrom(options)} }
  50% { ${pickFrom(options)} }
  100% { ${pickFrom(options)} }

 `
  ele.innerHTML = "";
  const absolute_bullshit = createElementWithClassAndParent("style", ele);
  absolute_bullshit.textContent = inadvisable_hacked_css_keyframe;
  const timing_functions = ["ease", "ease-in", "ease-out", "ease-in-out", "linear", "step-start", "step-end"];
  const animation = `${animation_name} ${getRandomNumberBetween(1, 10) * Math.random()}s ${pickFrom(timing_functions)} ${Math.random()*getRandomNumberBetween(1, 10)}s infinite`;
  ele.style.animation = animation;
}

clearGlitch = () => {
  const glitch = document.querySelector("#glitch");
  if (glitch) {
    glitch.remove();
  }
  if (audioPlaying) {
    for(let audio of audioPlaying){
      audio.pause();

    }
    audioPlaying = [];
  }
}

getQuipFor = (canvas, imageKey, currently_room) => {
  if (Math.random() > 0.5) {
    return currently_room ? pickFrom(genericRoomQuips) : pickFrom(genericHallwayQuips);
  }
  return pickFrom(genericQuips);
}