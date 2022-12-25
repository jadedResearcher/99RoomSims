
 const cross_origin_local_hack = window.location.href.includes("file:/")?"http://farragofiction.com/99RoomsSim/":"";
 
 //async, give it an image source and it'll handle loading it and rendering it to the target canvas
 const kickoffImageRenderingToCanvas = (source,canvas) => {
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.addEventListener('load', function () {
      renderImageToCanvas(img,canvas);
  }, false);
  img.src = cross_origin_local_hack+source;
}

//given an already loaded image, render it to the target canvas.
const renderImageToCanvas = (img, canvas)=>{
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);
  edge_detection(canvas);
  const most_frequent_color = threshold(canvas,100);
  message("Most Frequent color is "+most_frequent_color);
}

const threshold = function (canvas, threshold) {
  let num_black = 0;
  let num_white = 0;
  var ctx = canvas.getContext('2d',{ willReadFrequently: true });
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
      if(v === 0){
        num_black ++;
      }else{
        num_white ++;
      }
      d[i] = d[i + 1] = d[i + 2] = v
  }
  ctx.putImageData(output, 0, 0);
  return num_black>num_white? 0:255;
};

const edge_detection = function (canvas) {
  kernel(canvas, [-1, -1, -1, -1, 9, -1, -1, -1, -1]);
}

const kernel = function (canvas, weights) {
  var ctx = canvas.getContext('2d',{ willReadFrequently: true });
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
