//when done, want to use this to have specifics things for specific images

let audio_file_source;

//its a clas so we can lazy load the audio files and not stall out rendering the images
class AudioFiles {
  heart = new Audio(src = "audio/heartbeat.mp3");
  phone1 = new Audio(src = "audio/phone_glitch1.mp3");
  phone2 = new Audio(src = "audio/phone_glitch2.mp3");
  phone3 = new Audio(src = "audio/phone_glitch3.mp3");

  //why yes, this IS a leak. thank you for noticing :) :) :)
  shepard = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/zampanio_is_a_really_good_game.mp3")
  circus = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/circus.mp3");
  weird_ambient = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/weirdambient.ogg")
  robot = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/corruptab.mp3")
  hospital = new Audio("audio/answerer.mp3")
  dog = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/lost_your_dog.mp3");
  home = new Audio(src = "http://knucklessux.com/JR/AudioLogs/Raw/dont_take_me_home.mp3");
  muzak1 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2001%20Mall%20Open.mp3")
  muzak2 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2002%20Sale%20Of%20The%20Seventies.mp3")
  muzak3 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2003%20Third%20Floor%20Spending%20Spree.mp3")
  muzak4 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2004%20Food%20Court%20Calling.mp3")
  muzak5 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2005%20Grocery%20Grabbing.mp3")
  muzak6 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2006%20The%20Fountain%20Of%20Life.mp3")
  muzak7 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2007%20Phonebooth%20Call%20To%20Home.mp3")
  muzak8 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2008%20Restroom%20Retreat.mp3")
  muzak9 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2009%20Impulse%20Purchase%20(Part%201).mp3")
  muzak10 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2010%20Cash%20Or%20Cheque.mp3")
  muzak11 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2011%20Checkout%202%20Now%20Open.mp3")
  muzak12 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2012%20Impulse%20Purchase%20(Part%202).mp3")
  muzak13 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2013%20Parking%20Lot%20Lost.mp3")
  muzak14 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Mall%20Music%20Muzak%20-%20Mall%20Of%201974%20-%2014%20Mall%20Closed.mp3")
  muzak15 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/nondescriptive_title_w_Mastering%20(2).mp3")
  muzak16 = new Audio(src = "http://farragofiction.com/CodexOfRuin/MallMusicMuzakMallOf1974/Finish%20(1).mp3")


  laugh = new Audio(src = "audio/483159__f-r-a-g-i-l-e__children-s-toys-laughing.mp3")

  shopping1 = new Audio(src = "audio/shopping1.mp3")
  shopping2 = new Audio(src = "audio/shopping2.mp3")
  shopping3 = new Audio(src = "audio/shopping3.mp3")
  birds = new Audio(src = "audio/birds.mp3")
  birds2 = new Audio(src = "audio/463903__burghrecords__birds-in-spring-scotland.mp3")

  ice = new Audio(src = "audio/268023__dheming__breaking-ice-01.mp3")
  bells = new Audio(src = "audio/263886__jarredgibb__jingle-bells.mp3")

  waterSounds = new Audio(src = "audio/398718__inspectorj__water-swirl-small-25.mp3")

  //https://freesound.org/people/Dynamicell/sounds/17548/
  fire = new Audio(src = "audio/17548__dynamicell__fire-forest-inferno.mp3")


  spookyAudio = [this.heart, this.weird_ambient, this.robot, this.phone1, this.phone2, this.phone3, this.hospital, this.circus];
  glitchAudio = [...this.spookyAudio, this.birds, this.birds2, this.laugh, this.home, this.fire, this.ice, this.shopping1, this.shopping2, this.shopping3, this.shepard, this.hospital, this.dog, this.home, this.muzak2, this.muzak1, this.muzak3, this.muzak4, this.muzak5, this.muzak6, this.muzak8, this.muzak7, this.muzak9, this.muzak16, this.muzak15, this.muzak14, this.muzak13, this.muzak12, this.muzak11, this.muzak10]


  intentional_quips_room = {
    "00023-img.png": { text: "It's festive!", audio: this.bells },
    "00000-img.png": { text: "It's festive!", audio: this.bells },
    "00001-img.png": { text: "It's festive!", audio: this.bells },
    "00002-img.png": { text: "It's festive!", audio: this.bells },
    "00003-img.png": { text: "It's festive!", audio: this.bells },
    "00004-img.png": { text: "It's festive!", audio: this.bells },
    "00005-img.png": { text: "It's festive!", audio: this.bells },
    "00006-img.png": { text: "It's festive!", audio: this.bells },
    "00007-img.png": { text: "It's festive!", audio: this.bells },
    "00008-img.png": { text: "It's festive!", audio: this.bells },
    "00009-img.png": { text: "It's festive!", audio: this.bells },
    "00010-img.png": { text: "It's festive!", audio: this.bells },
    "00011-img.png": { text: "It's festive!", audio: this.bells },
    "00012-img.png": { text: "It's festive!", audio: this.bells },
    "00013-img.png": { text: "It's festive!", audio: this.bells },
    "00014-img.png": { text: "It's festive!", audio: this.bells },
    "00015-img.png": { text: "It's festive!", audio: this.bells },
    "00016-img.png": { text: "It's festive!", audio: this.bells },
    "00017-img.png": { text: "It's festive!", audio: this.bells },
    "00018-img.png": { text: "It's festive!", audio: this.bells },
    "00019-img.png": { text: "It's festive!", audio: this.bells },
    "00020-img.png": { text: "It's festive!", audio: this.bells },
    "00021-img.png": { text: "It's festive!", audio: this.bells },
    "00021-img.png": { text: "It's festive!", audio: this.bells },
    "00024-img.png": { text: "It's festive!", audio: this.bells },
    "00025-img.png": { text: "It's festive!", audio: this.bells },
    "00026-img.png": { text: "It's festive!", audio: this.bells },
    "00027-img.png": { text: "It's festive!", audio: this.bells },

    "00029-img_20221225202507.png": { text: "Meat is meat.", audio: this.shopping1 }
    , "00030-img_20221225202507.png": { text: "Flesh.", audio: this.shopping2 }
    , "00031-img_20221225202507.png": { text: "I think...I think the meat has gone off...", audio: this.shopping2 }
    , "00028-img_20221225202507.png": { text: "Are you hungry?", audio: this.shopping3 }
    , "00019-img_20221225202216.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }
    , "00020-img_20221225202216.png": { text: "The tang of chemical sweetness...", audio: this.shopping2 }
    , "00021-img_20221225202216.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }
    , "00022-img_20221225202216.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }
    , "00023-img_20221225202216.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }
    , "00024-img_20221225202216.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }
    , "00025-img_20221225202216.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }
    , "00026-img_20221225202216.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }

    , "00033-img_20221225201448.png": { text: "Nostalgia...", audio: this.muzak1 }
    , "00034-img_20221225201448.png": { text: "At least you can sit and rest.", audio: this.muzak2 }
    , "00035-img_20221225201448.png": { text: "I... wouldn't eat anything here.", audio: this.muzak3 }
    , "00028-img_20221225201448.png": { text: "I... wouldn't eat anything here.", audio: this.muzak4 }
    , "00029-img_20221225201448.png": { text: "I... wouldn't eat anything here.", audio: this.muzak5 }
    , "00030-img_20221225201448.png": { text: "I... wouldn't eat anything here.", audio: this.muzak6 }
    , "00031-img_20221225201448.png": { text: "I... wouldn't eat anything here.", audio: this.muzak7 }
    , "00032-img_20221225201448.png": { text: "I... wouldn't eat anything here.", audio: this.muzak8 }
    , "00008-img_20221225201114.png": { text: "I... wouldn't eat anything here.", audio: this.muzak9 }
    , "00001-img_20221225201114.png": { text: "I... wouldn't eat anything here.", audio: this.muzak10 }
    , "00002-img_20221225201114.png": { text: "I... wouldn't eat anything here.", audio: this.muzak11 }
    , "00003-img_20221225201114.png": { text: "I... wouldn't eat anything here.", audio: this.muzak12 }
    , "00004-img_20221225201114.png": { text: "I... wouldn't eat anything here.", audio: this.muzak13 }
    , "00005-img_20221225201114.png": { text: "I... wouldn't eat anything here.", audio: this.muzak14 }
    , "00006-img_20221225201114.png": { text: "I... wouldn't eat anything here.", audio: this.muzak15 }
    , "00007-img_20221225201114.png": { text: "I... wouldn't eat anything here.", audio: this.muzak16 }



    , "00008-img_20221225195805.png": { text: "Oh look. Friends.", audio: this.laugh }

    , "1664808285878-img.png": { text: "Fire is free.", audio: this.fire }
    , "1664808285879-img.png": { text: "It burns.", audio: this.fire }
    , "1664808285877-img.png": { text: "It's....cold.", audio: this.waterSounds }

    , "00019-img2.png": { text: "It's festive!", audio: this.circus },
    "00032-img_20221225201448.png": { text: "Do you remember the diners of your childhood?", audio: this.muzak8 },
    "1664808285876-img.png": { text: "That smell...Salt and rotting fish... and... something else...", audio: this.waterSounds },
    "00024-img_20221225202216.png": { text: "At least it's different...", audio: this.shopping3 },
    "00026-img_20221225202216.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }
  }

  intentional_quips_hallway = {

    "00062-img.png": { text: "Strangely peaceful...", audio: this.birds },
    "00063-img.png": { text: "Strangely peaceful...", audio: this.birds },
    "00064-img.png": { text: "It almost makes you feel like you're out, doesn't it?", audio:this.birds },
    "00065-img.png": { text: "Do you remember what the feel of fresh breeze on your face was like?", audio: this.birds },
    "00057-img.png": { text: "It's probably just paint...", audio: this.heart },
    "00058-img.png": { text: "It can't be blood. Blood doesn't stay red like that.", audio: this.heart },
    "00059-img.png": { text: "What happened here?", audio: this.heart },

    "00060-img.png": { text: "This would make a great children's hospital...", audio: this.heart },


    "00019-img2.png": { text: "It's festive!", audio: this.circus },
    "00100-img.png": { text: "It's festive!", audio: this.circus },

    "00037-img.png": { text: "Does it sound like the walls are about to collapse to you?", audio: this.ice },

    "00032-img.png": { text: "Does it sound like the walls are about to collapse to you?", audio: this.ice },
    "00015-img.png": { text: "It's strange how you never really look closely at common chores like shopping.", audio: this.shopping2 }
    , "00015-img.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }
    , "00016-img2.png": { text: "I... wouldn't eat anything here.", audio: this.shopping1 }

  }
}

let glitchesFound = 0;

let glitchAudioPlaying = [];
let audioPlaying = [];




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
  Do you have  reason you keep walking down these halls?
  Isn't this distracting you from something important?
  Have you drunk any water, lately?
  How long have you been doing this?
  What time is it?
  Where are you?
  Is this really the most important thing you could be doing?
  Zampanio is a really fun game. You are playing it.
  Do you seek your Identity in these endless halls? Would it make you feel better if I gave you one?
  What catharsis do you seek from observing these Halls?
Ever forward, that's how you make progress. Right?`

const genericRoomQuipsRaw =
  `Have you been in this room before?
Was this always a room?
What lead you here?
Are you finding what you seek?
Are you entertained?
What emotion are you feeling?
Sometimes I wonder what sort of people might find their way here...
What are you feeling when you see this, I wonder?
Do you understand what you are seeing?
Wasn't...wasn't this a hallway before?`

const genericQuips = genericQuipsRaw.split("\n")
const genericRoomQuips = genericRoomQuipsRaw.split("\n")
const genericHallwayQuips = genericHallwayQuipsRaw.split("\n")



applyGlitch = (canvas) => {
  const frame = document.querySelector(".frame");
  const glitch = createElementWithClassAndParent("div", frame);
  glitch.className = "glitch";
  glitch.style.backgroundImage = `url(${canvas.toDataURL()})`;
  glitch.style.width = getRandomNumberBetween(5 + glitchesFound * 2, 50 + glitchesFound * 10) + "px";
  glitch.style.height = getRandomNumberBetween(5 + glitchesFound * 2, 50 + glitchesFound * 10) + "px";
  const normalWidth = parseInt(glitch.style.width);
  const normalHeight = parseInt(glitch.style.height);
  const x = getRandomNumberBetween(0, 768);
  const y = getRandomNumberBetween(0, 512);
  glitch.style.backgroundPositionX = "-" + x + "px";
  glitch.style.backgroundPositionY = "-" + y + "px";
  glitch.style.top = y + 10 + "px";
  glitch.style.left = x + 10 + "px";

  glitch.onclick = () => {

    const audio = pickFrom(audio_file_source.glitchAudio);
    glitchAudioPlaying.push(audio);
    glitchesFound++;
    glitchQuip()
    audio.play();
    glitch.style.animation = "";//stop it.
    glitch.remove();
  }

  fuckShitUP("1", glitch)

}

const glitchQuip = () => {
  const possibilitiesRaw = `Why. Why did you do that?
  Wait. What was that?
  ...
  Look. Stop doing that.
  Do you think this is the POINT or something. NO. There is no point. Stop doing that.
  What are you even hoping to achieve here?
  What catharsis is worth the Ruin you are bringing here?
  STOP.
  I. Don't think it's supposed to be doing that.
  Are you sure your computer can handle all this?
  Look. I'll tell you anything you want to know. Just. Go back.  Please?
  Was that supposed to happen?
  I Understand seeking additional Knowledge, but is this truly worth it?
  How can you handle the Cacaphony?
  It's on You if that breaks anything.
  Look, I'll level with you here. There's not even a Point to collecting the glitches. They just. Aren't meant to be here.
  Could we just maybe stop touching the weird glitches?
  Maybe don't touch anymore of those? Who knows what they are.`
  const possibilities = possibilitiesRaw.split("\n")
  let words = `${pickFrom(possibilities)}`;
  if (glitchesFound > 10) {
    const remaining = document.querySelectorAll(".glitch").length - 1;
    if (remaining === 0) {
      words += " :\  I was NOT giving that to you as a Challenge. Why on earth would you try to collect all the World Destroying Glitches? Do you think this is pokemon or something? This is terrible. A disaster. What is Wrong with the people who end up inside this maze? Fine. Go off. Play in your Apocalypse. See if I care. I won't even give you a Good link to go to next. It probably will be Rotten by the time you find it. Serves you right: <a target='_blank' href ='http://farragofiction.com/LitRPGSimE/?apocalypse=night'>Enjoy Your Apocalypse</a>";
    }
    words += ` ${remaining} remaining. in this area. Why not.`
  }
  message(words)
}


fuckShitUP = (time, ele) => {
  const mildAmount = getRandomNumberBetween(1, 15 + glitchesFound * 5);
  const extremeAmount = getRandomNumberBetween(1, 5);
  const normalWidth = parseInt(ele.style.width);
  const normalHeight = parseInt(ele.style.height);
  const extremeOptions = [`background-position-y: ${getRandomNumberBetween(0, normalHeight)}`,
  `background-position-x: ${getRandomNumberBetween(0, normalWidth)}`,
  `transform: rotate(${Math.random()}turn);`,
  `opacity: ${0.5 + Math.random() * 2}`,
    `filter: grayscale(1);`,
    `filter: sepia(0.2);`,
    `z-index:100`,
    `z-index:-100`
  `filter: blur(${getRandomNumberBetween(1, 3)}px);`,
  `filter: blur(${getRandomNumberBetween(1, 3)}px);`,

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
  50% { ${pickFrom(options)} }
  100% { ${pickFrom(options)} }

 `
  ele.innerHTML = "";
  const absolute_bullshit = createElementWithClassAndParent("style", ele);
  absolute_bullshit.textContent = inadvisable_hacked_css_keyframe;
  const timing_functions = ["ease", "ease-in", "ease-out", "ease-in-out", "linear", "step-start", "step-end"];
  const animation = `${animation_name} ${getRandomNumberBetween(1, 10) * Math.random()}s ${pickFrom(timing_functions)} ${Math.random() * getRandomNumberBetween(1, 10)}s infinite`;
  ele.style.animation = animation;
}

clearNonGlitchMusic = () => {
  if (audioPlaying) {
    for (let audio of audioPlaying) {
      audio.pause();

    }
    audioPlaying = [];
  }
}

clearGlitch = () => {
  const glitches = document.querySelectorAll(".glitch");
  if (glitches) {
    for (let glitch of glitches) {
      glitch.remove();
    }
  }
  if (glitchAudioPlaying) {
    for (let audio of glitchAudioPlaying) {
      audio.pause();

    }
    glitchAudioPlaying = [];
  }
}

getQuipFor = (canvas, imageKey, currently_room) => {
  if(!audio_file_source){
    audio_file_source = new AudioFiles();
  }
  //console.log("JR NOTE: image key is", imageKey, "curretly room is",currently_room)
  if (currently_room && audio_file_source.intentional_quips_room[imageKey]) {
    const quip = audio_file_source.intentional_quips_room[imageKey];
    //console.log("JR NOTE: quip found is", quip, "audio is", quip?.audio);
    quip.audio && quip.audio.play();
    quip.audio && audioPlaying.push(quip.audio);
    return quip.text;
  }

  if (!currently_room && audio_file_source.intentional_quips_hallway[imageKey]) {
    const quip = audio_file_source.intentional_quips_hallway[imageKey];
    quip.audio && quip.audio.play();
    quip.audio && audioPlaying.push(quip.audio);

    return quip.text;
  }
  //console.log("JR NOTE:chosen_image wasn't in ",intentional_quips_room, "or ",intentional_quips_hallway )
  if (Math.random() > .95) {
    applyGlitch(canvas);//intentionally this will leave a little section of the previous image instead of the current one.
  }
  if (Math.random() > 0.5) {
    return currently_room ? pickFrom(genericRoomQuips) : pickFrom(genericHallwayQuips);
  }
  return pickFrom(genericQuips);
}