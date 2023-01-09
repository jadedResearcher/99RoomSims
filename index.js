//https://codepen.io/chris22smith/pen/PbBwjp  source for frame css
let number_clicks = 0;

const clickAudio = new Audio(src = "audio/408006__judith136__23.mp3");

//string
let referer;
//calback url
let referer_details;
//json object 
/*feeUnder
: 
76
item_name
: 
"Create-your-own Chicken"
price
: 
"1.48"
restaurant_name
: 
"Master  Fries" */
let details;
let tip = 0.0;
window.onload = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let tmp_ref = urlParams.get('referer');
  let tmp_d = urlParams.get('details');
  let tmp_tip = urlParams.get('tip');

  if(tmp_tip){
    tip = tmp_tip;
  }
  let tmp_ref_details = urlParams.get('referer_details') &&urlParams.get('referer_details').replaceAll('"','');
  if (tmp_ref) {
    referer = tmp_ref;
  }

  if (tmp_ref) {
    referer_details = tmp_ref_details;
  }

  if (tmp_d) {
    details = JSON.parse(decodeURIComponent(tmp_d));
  }

  console.log("JR NOTE:",{referer, referer_details,details})

  start();
}

const getReferrerDetailsQuips = ()=>{
  if(!details){
    return [];
  }

  const item_name = details.item_name;
  const price = details.price;
  const feeUnder = details.feeUnder;
  const restaurant_name = details.restaurant_name;

  let tmp = ["","","","","","","",
    
    `Personally, I'm not sure I'd have risked all this for a lousy ${item_name}.`
    ,`$${price} seems really cheap for a ${item_name}, but they get you with the fees.`
    ,`Just couldn't bring yourself to spend $${feeUnder} to avoid the fee of wandering this maze, could you?`
    ,`${restaurant_name} really needs to stop partnering with ${referer}.`
    ,`Hope you enjoyed that ${item_name}.`
    ,`Was this your first time ordering from ${restaurant_name}?`

    ,`Maybe next time you can just pay the $${feeUnder} and avoid all this.`
  ]
  if(tip == 0){
    tmp.push("Maybe you should have tipped?");
    tmp.push("Man, bet that driver didn't like how you didn't tip.");
    tmp.push("The fee's what doomed you and all but I bet the lack of a tip didn't help...");

  }else if(tip < 10){
    tmp.push(`Did you really think $${tip} was enough?`);
    tmp.push(`Would YOU have driven all that way for a lousy $${tip}?`);
    tmp.push(`Not a great tipper, huh?`);
  }else if (tip > 100){
    tmp.push(`Wow, you woulda thought that for a $${tip} tip the driver at least wouldn't have sent you to the maze.`);
    tmp.push(`Man, you could just used that  $${tip} tip to pay your fee. `);
    tmp.push(`What on earth compelled you to tip  $${tip}? `);

  }else{
    tmp.push(`$${tip} tip? You've worked in the service industry, haven't you?`);
    tmp.push(`$${tip} tip? Nice.`);
    tmp.push(`$${tip} tip? Pretty decent of you.`);

  }
  return tmp;
}

const getReferrerQuips = ()=>{
  if(!referer){
    return [];
  }
  return ["","","","","","","","","","","","","","","","","","","","",
    `So. Decided to mess with ${referer}, did you?`
    ,`Did you really think ${referer} wouldn't take their fee from you?`
    ,`${referer} really doesn't mess around, does it?`
    ,`${referer} warned you about the fee...`
    ,`${referer}, huh? That's rough, buddy.`
    ,`${referer} just wants you to experience this for a little while. Don't worry.`
  ]
}

function paramsToObject(entries) {
  const result = {}
  for(const [key, value] of entries) { // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

const start = async () => {

  await fetchAllImages();

  //00018-img is open doors, 19 is closed
  const canvas = document.querySelector("#canas_viewport");
  startMaze(canvas);
  canvas.onclick = () => {
    clickAudio.play();
  }
  const backButton = document.querySelector("#back");
  backButton.onclick = () => {
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

