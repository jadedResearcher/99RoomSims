 
 //async, give it an image source and it'll handle loading it and rendering it to the target canvas
 const kickoffImageRenderingToCanvas = (source,canvas) => {
  var img = new Image();
  img.addEventListener('load', function () {
      renderImageToCanvas(img,canvas);
  }, false);
  img.src = source;
}

//given an already loaded image, render it to the target canvas.
const renderImageToCanvas = (img, canvas)=>{
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);
}
