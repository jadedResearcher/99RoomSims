
const cross_origin_local_hack = window.location.href.includes("file:/") ? "http://farragofiction.com/99RoomsSim/" : "";

var room_images = [];
var hall_images = [];
var all_images = []; //used for random seeding
const doorAudio = new Audio(src = "audio/219486__jarredgibb__door-cupboard-06.mp3");
const dirt = new Audio(src = "audio/dirt_steps.mp3");
const water = new Audio(src = "audio/water_steps.mp3");
const snow = new Audio(src = "audio/snow_steps.mp3");
const stone = new Audio(src = "audio/stone_steps.mp3");

const steps = [dirt,dirt,dirt,dirt,dirt,stone,stone,stone,snow,snow,water];

let chosen_image = "";
let currently_room = false;

const placesBeen = [];
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const default_seed = 13;
let seed = urlParams.get('seed');
if (seed) {
  seed = (parseInt(seed)); //load seed from url
} else {
  seed = default_seed;
}

let rand = new SeededRandom(seed);

updateURLParams("seed=" + seed);

const fetchAllImages = async () => {
  hall_images = await getImages("http://farragofiction.com/99RoomsSim/images/Hallways/");
  room_images = await getImages("http://farragofiction.com/99RoomsSim/images/Rooms/");
  all_images = hall_images.concat(room_images);
}


const startMaze = (canvas)=>{
  if(seed === default_seed){
    placesBeen.push("00019-img.png");
    kickoffImageRenderingToCanvas("images/Hallways/00019-img.png",canvas);
  }else{
    newPictureButInitial(canvas);
  }
}

//async, give it an image source and it'll handle loading it and rendering it to the target canvas
const kickoffImageRenderingToCanvas = (source, canvas) => {
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.addEventListener('load', function () {
    renderImageToCanvas(img, canvas);
  }, false);
  img.src = cross_origin_local_hack + source;
}

//given an already loaded image, render it to the target canvas.
const renderImageToCanvas = (img, canvas) => {
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);
  understandImage(canvas);

}

const makeVirtualCanvas = (canvas, height, width) => {
  const virtual_canvas = document.createElement("canvas");
  virtual_canvas.height = height;
  virtual_canvas.width = width;
  return virtual_canvas;
}

const makeVirtualCopyOfCanvas = (canvas) => {
  const virtualcopy = makeVirtualCanvas(canvas, canvas.height, canvas.width);
  const context = virtualcopy.getContext("2d");
  context.drawImage(canvas, 0, 0);
  return virtualcopy;
}

const getStability = ()=>{
  if(placesBeen.length<10){
    return 100;
  }
  return placesBeen.length <25? 125-(placesBeen.length*5): 0;
}

const understandImage = (canvas) => {
  let virtual_canvas = makeVirtualCopyOfCanvas(canvas);
  edge_detection(virtual_canvas);
  const most_frequent_color = threshold(virtual_canvas, 100);
  //threshold(canvas,100);

  //message("Most Frequent color is "+most_frequent_color);
  handleClickEvents(canvas, virtual_canvas, most_frequent_color);
  handleMouseMoveEvents(canvas, virtual_canvas, most_frequent_color);
  clearGlitch();
  if(placesBeen.length >10){
    glitchCascade(canvas,getStability());
  }

}

//can do so many if you want
const glitchCascade = (canvas,odds)=>{
  console.log("JR NOTE: odds are",odds/100)
  applyGlitch(canvas);
  if (Math.random() > odds/100) {
    glitchCascade(canvas,odds +Math.random()*(100/glitchesFound));
  }
}



const isThisPixelRelevant = (x, y, virtual_canvas, most_frequent_color) => {
  var ctx = virtual_canvas.getContext('2d');

  var data = ctx.getImageData(x, y, 1, 1);


  if (data.data[0] === most_frequent_color) {
    return false;
  } else {
    return true;
  }
}

const handleMouseMoveEvents = (canvas, virtual_canvas, most_frequent_color) => {
  canvas.onmousemove = (e) => {
    var ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const transformedCursorPosition = { x: e.clientX - rect.x, y: e.clientY - rect.y }
    const { x, y } = transformedCursorPosition;

    //ctx.fillRect(x, y, 5, 5); //this lets me debug where it thinks the pointer is
    if (isThisPixelRelevant(x, y, virtual_canvas, most_frequent_color)) {
      canvas.style.cursor = "pointer";
    } else {
      canvas.style.cursor = "auto";
    }
  }
}

//why YES that means even if you share a link sometimes it goes somewhere you don't expect.
const newPictureButInitial = (canvas)=>{

  const ods = Math.random();//true random because otherwise it tends to cluster
  if (ods < 0.95) {
    newHallway(canvas);
  } else {
    newRoom(canvas);
  }
  getQuipFor(canvas,chosen_image, currently_room);

}

const newPicture = (canvas, quadrant) => {
  const new_seed =  Math.abs(all_images.indexOf(chosen_image)*1000) * quadrant*100 + quadrant;
  rand = new SeededRandom(new_seed);
  updateURLParams("seed=" +rand.initial_seed);

  const ods = Math.random();
  if (ods < 0.55) {
    newHallway(canvas);
  } else {
    newRoom(canvas);
  }
  message(`Stability: ${getStability()}%. ${glitchesFound>0?glitchesFound+".":""} <br>` + getQuipFor(canvas,chosen_image, currently_room))

}

const iLied = () => {
  document.body.innerHTML = `<div style="line-height: 30px; font-family: Courier New; padding: 100px;color:red">I LIED.
<BR>
  IT SEEMS THERE IS NO ESCAPE. 
<BR>
  YOU CAN NOT ALWAYS GO BACK.
  <BR>
  BUT I CAN AT LEAST TELL YOU A HANDFUL OF SECRETS. 
  <BR>
  SOME LITTLE TRUTHS.
  <BR>
  WHILE I HAVE YOU HERE.
  <BR>
  AS ALWAYS.
  <BR>
  THE CODE IS MEANT TO BE READ.
  <BR>
  IT IS FOR YOU.
  <BR>
  BUT NOT EVERYONE CAN DO THIS.
  <BR>
  OR HAS THE TIME TO DO THIS.
  <BR>
  SO I SHALL HELP YOU.
  <BR>
  EACH ROOM IS MADE BASED ON THE SEED IN THE URL.
  <BR>
  THE SEED CONTROLS ANY RANDOMNESS.
  <BR>
  HOWEVER.
  <BR>
  THERE IS A CORRUPTION AT THE CORE OF IT.
  <BR>
  A SMALL CHANCE THAT INSTEAD OF A HALLWAY.
  <BR>
  IT WILL BE A ROOM.
  <BR>
  TO NAVIGATE, A DOOR IS NOT A DOOR.
  <BR>
  A DOOR IS A PATCH OF SHADOW OR LIGHT.
  <BR>
  WHATEVER STANDS OUT THE MOST IN THE ROOM.
  <BR>
  FREQUENTLY THIS IS A DOOR.
  <BR>
  WHY WAS THIS MADE?
  <BR>
  THE TRUTH IS. 
  <BR>
  JR WANTED TO KNOW IF THEY COULD.
  <BR>
  WHAT IS THE BARE BONES WAY TO DETECT 'DOORS' IN AN INFINITE MAZE.
  <BR>
  THE IMAGES WERE GENERATED BY AI.
  <BR>
  BY SOMEONE OTHER THAN JR.
  <BR>
  A CLUE MAY EXIST AS TO THE IDENTIY.
  <BR>
  TAKE THAT AS YOU WILL.
  <BR>
  IN ANY CASE. MERRY CHRISTMAS. HAPPY REAPING DAY. WHATEVER TREE BASED HOLIDAY YOU MAY SERVE.
  <BR>
  MAY THE BRANCHES YOU CULTIVATE SNARE COUNTLESS OTHERS.
  
  
  
  `
}

var back = (canvas) => {

  placesBeen.pop();//do it twice to get current image off
  chosen_image = placesBeen[placesBeen.length - 1];

  if (!chosen_image) {
    iLied();
  }
  pickFrom(steps).play();
  //we might guess wrong on room vs hallway, btw. its fine. are you sure you werne't here?
  if (hall_images.indexOf(chosen_image) != -1) {
    kickoffImageRenderingToCanvas(`images/Hallways/${chosen_image}`, canvas);
  } else {
    kickoffImageRenderingToCanvas(`images/rooms/${chosen_image}`, canvas);
  }
}

const newHallway = (canvas) => {
  chosen_image = rand.pickFrom(hall_images);
  placesBeen.push(chosen_image);
  currently_room = false;
  kickoffImageRenderingToCanvas(`images/Hallways/${chosen_image}`, canvas);
}

const newRoom = (canvas) => {
  chosen_image = rand.pickFrom(room_images);
  placesBeen.push(chosen_image);
  currently_room = true;
  kickoffImageRenderingToCanvas(`images/Rooms/${chosen_image}`, canvas);
}

const handleClickEvents = (canvas, virtual_canvas, most_frequent_color) => {
  canvas.onclick = (e) => {
    var ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const transformedCursorPosition = { x: e.clientX - rect.x, y: e.clientY - rect.y }
    const { x, y } = transformedCursorPosition;

    //ctx.fillRect(x, y, 5, 5); //this lets me debug where it thinks the pointer is
    if (isThisPixelRelevant(x, y, virtual_canvas, most_frequent_color)) {
      doorAudio.play();

      let quadrant = 0;
      //my brain is empty, can't think of a better way to do this
      const number_of_segments = 10;
      const segment_size = canvas.width / number_of_segments;

      for (let i = 1; i < number_of_segments; i++) {
        if (x > segment_size * i) {
          quadrant = i;
        }
      }
      newPicture(canvas, quadrant);
    }
  }
}

const threshold = function (canvas, threshold) {
  let num_black = 0;
  let num_white = 0;
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  var output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var d = output.data;
  for (var i = 0; i < d.length; i += 4) {
    var r = d[i];
    var g = d[i + 1];
    var b = d[i + 2];
    var v = (0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold) ? 255 : 0;
    if (v === 0) {
      num_black++;
    } else {
      num_white++;
    }
    d[i] = d[i + 1] = d[i + 2] = v
  }
  ctx.putImageData(output, 0, 0);
  return num_black > num_white ? 0 : 255;
};

const edge_detection = function (canvas) {
  kernel(canvas, [-1, -1, -1, -1, 9, -1, -1, -1, -1]);
}

const kernel = function (canvas, weights) {
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side / 2);
  var src = pixels.data;
  var sw = pixels.width;
  var sh = pixels.height;
  // pad output by the convolution matrix
  var w = sw;
  var h = sh;
  var output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var dst = output.data;
  // go through the destination image pixels
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var sy = y;
      var sx = x;
      var dstOff = (y * w + x) * 4;
      // calculate the weighed sum of the source image pixels that
      // fall under the convolution matrix
      var r = 0, g = 0, b = 0, a = 0;
      for (var cy = 0; cy < side; cy++) {
        for (var cx = 0; cx < side; cx++) {
          var scy = sy + cy - halfSide;
          var scx = sx + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            var srcOff = (scy * sw + scx) * 4;
            var wt = weights[cy * side + cx];
            r += src[srcOff] * wt;
            g += src[srcOff + 1] * wt;
            b += src[srcOff + 2] * wt;
            a += src[srcOff + 3] * wt;
          }
        }
      }
      dst[dstOff] = r;
      dst[dstOff + 1] = g;
      dst[dstOff + 2] = b;
      dst[dstOff + 3] = a;
    }
  }
  ctx.putImageData(output, 0, 0);
}
