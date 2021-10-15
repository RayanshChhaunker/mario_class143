function preload() {
	world_start = loadSound("world_start.wav");
	mario_killing = loadSound("kick.wav");
	mario_jump = loadSound("jump.wav");
	gameover_sound = loadSound("gameover.wav");
	mario_getcoin = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console')

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded');
}

function draw() {
	game();
}

function gotPoses(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}