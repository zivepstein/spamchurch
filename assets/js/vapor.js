/* random words scene */
function RandomWords(ctx) {
  this.context = ctx;
  this.throttle = 30;
  this.messages = [
    'ブート R U OK?',
    'リサフランク420 / 現代のコンピュー',
    '花の専門店',
    'ライブラリ',
    '地理 と悪',
    'YOと悪寒ダイビング',
    '数学 + 待機',
    '待機-ランク',
    '☹ ヤンリ',
    'ンドエルー☹'
  ];
}

RandomWords.prototype.tick = function (cb) {
  var txt = this.messages[randomBetween(0, this.messages.length-1)];
  var loc = randomLocation(this.context);
	var fontSize = randomBetween(30, 80);

  this.context.font = 'bold '+fontSize+'px sans-serif';
  this.context.shadowColor = 'black';
  this.context.shadowOffsetX = 5; 
  this.context.shadowOffsetY = 5; 
  this.context.shadowBlur = 0;
  this.context.rotate(randomBetween(-1, 1, false));
  this.context.fillStyle = randomLinearGradient(this.context, loc);
  this.context.fillText(txt, loc.x, loc.y, this.context.canvas.width);
  requestAnimationFrame(cb);
};

/* random orbs scene */
function RandomOrbs(ctx) {
  this.context = ctx;
  this.throttle = 100;
  this.patterns = [
    'https://i.imgur.com/OWIGJYC.jpg',
    'https://i.imgur.com/e2CF8T5.jpg',
    'https://i.imgur.com/bvdLsLc.jpg',
    'https://i.imgur.com/DUxsGmE.jpg',
    'https://i.imgur.com/hovt2oQ.jpg'
  ];
}

RandomOrbs.prototype.tick = function (cb) {
  var pat = this.patterns[randomBetween(0, this.patterns.length-1)];
  var loc = randomLocation(this.context);
  this.context.beginPath();
  this.context.arc(loc.x, loc.y, 100, 0, 2*Math.PI, false);
  this.context.fillStyle = pattern(this.context, getImage(pat));
  this.context.fill();
  this.context.closePath();
  requestAnimationFrame(cb);
};

/* random imgs scene */
function RandomImages(ctx) {
  this.context = ctx;
  this.throttle = 25;
  this.images = [
    'https://i.imgur.com/iaUxYhO.jpg',
    'https://i.imgur.com/9UZ4mi5.jpg',
    'https://i.imgur.com/nwNkr3o.jpg',
    'https://i.imgur.com/tzXzVzt.jpg',
    'https://i.imgur.com/uGIy30B.png',
    'https://i.imgur.com/19NWb0B.jpg',
    'https://i.imgur.com/yjsYTc8.jpg',
    'https://i.imgur.com/6XyUJeE.jpg',
    'https://i.imgur.com/E6XwGKF.jpg',
    'https://i.imgur.com/cmFVvCT.png',
    'https://i.imgur.com/yCJcyLI.jpg',
    'https://i.imgur.com/OEYZ7nF.jpg',
    'https://i.imgur.com/zydsijo.jpg',
    'https://i.imgur.com/csG4DwU.jpg',
    'https://i.imgur.com/NHOsJqv.jpg',
    'https://i.imgur.com/ipUH23S.jpg',
    'https://i.imgur.com/ak2S3Xb.jpg',
    'https://i.imgur.com/i6Gz9dh.jpg',
    'https://i.imgur.com/mapZGbm.jpg',
    'https://i.imgur.com/D6vjTeX.jpg',
    'https://i.imgur.com/vacR6Vp.jpg',
    'https://i.imgur.com/yNSpK0X.jpg',
    'https://i.imgur.com/eU7JwBO.png',
    'https://i.imgur.com/6FMvRYA.jpg',
    'https://i.imgur.com/jEx3ThC.jpg',
    'https://i.imgur.com/cfUCsUo.png',
    'https://i.imgur.com/xLBgJ7F.jpg',
    'https://i.imgur.com/WUw3pp1.jpg',
    'https://i.imgur.com/WKjxASI.jpg',
    'https://i.imgur.com/F4anmFR.jpg',
    'https://i.imgur.com/8zdDsGP.jpg',
    'https://i.imgur.com/mbVe4Ak.jpg',
 
    // busts
    'https://i.imgur.com/NQrWrhe.png',
    'https://i.imgur.com/d7VsirD.png',
    'https://i.imgur.com/0bPZx25.png',
    'https://i.imgur.com/kx6TkpK.png'
  ];
}

RandomImages.prototype.tick = function (cb) {
  var img = this.images[randomBetween(0, this.images.length-1)];
  var loc = randomLocation(this.context);
  var imgEl = getImage(img);
  this.context.drawImage(imgEl, loc.x, loc.y);
  requestAnimationFrame(cb);
};

/* utilities */
function randomLocation(ctx) {
  return {
    x: randomBetween(0, ctx.canvas.width),
    y: randomBetween(0, ctx.canvas.height)
  };
}

function randomBetween(min, max, floor) {
  floor = ((typeof floor === 'boolean') ? floor : true);
  var rand = Math.random() * ((max - min) + 1) + min;
  if (floor) {
    return Math.floor(rand);
  }
  return rand;
}

function randomColor() {
  var r = randomBetween(0, 256);
  var g = randomBetween(0, 256);
  var b = randomBetween(0, 256);
  return color(r, g, b);
}

function randomLinearGradient(ctx, loc) {
  var span = 100;
  var gradient = ctx.createLinearGradient(loc.x-span, loc.y-span, loc.x+span, loc.y+span);
  gradient.addColorStop(0, randomColor());
  gradient.addColorStop(1, randomColor());
  return gradient;
}

function pattern(ctx, img){
  var pat = ctx.createPattern(img, 'repeat');
  return pat;
}

function getImage(url){
  var ratio = randomBetween(10, 30);
  var img = document.createElement('img');
  img.style.maxWidth = ratio+'%';
  img.style.maxHeight = ratio+'%';
  img.src = url;
  return img;
}

function color(r, g, b) {
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

var filters = {
  saturate: function() {
    return 'saturate('+randomBetween(1, 5)+')';
  },
  contrast: function() {
    return 'contrast('+randomBetween(1, 5)+')';
  },
  'hue-rotate': function() {
    return 'hue-rotate('+randomBetween(100, 200)+'deg)';
  },
};

function trip(el) {
  var randomFilter = Object.keys(filters)
  .map(function(k){
    var fn = filters[k];
    return fn();
  }).join(' ');

  el.style['filter'] = el.style['-webkit-filter'] = randomFilter;
}

/* internal to scene player */
var scenes = [RandomWords, RandomOrbs, RandomImages];

$(function () {
  if (!window.chrome) {
    alert('This experiment requires chrome');
    return;
  }
  var can = document.getElementById('content');
  var ctx = can.getContext('2d');
  var container = $(can).parent();

  var resize = function() {
    can.width = container.width();
    can.height = container.height();
  }

  resize();
  $(window).resize(resize);
  runScenes(ctx);
  setInterval(trip.bind(null, can), 1000);
});

function runScenes(ctx) {
  var display = runScene.bind(null, ctx);
  async.forEach(scenes, display);
}

function runScene(ctx, scene) {
  var inst = new scene(ctx);
  var tick = function () {
    inst.tick(tick);
  };
  tick();
}