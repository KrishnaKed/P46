const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, tank1, tank2, tank3, tank4,Tankshooter;

var tank1Img ,tank2Img, tank3Img, tank3Img;

function preload(){
  backgroundImage=loadImage("Images/Bg.jpg")
  tank1Img=loadImage("Images/Tankbotton.png")
  tank2Img=loadImage("Images/Tankbotton1.png")
  tank3Img=loadImage("Images/Tankbotton2.png")
  tank4Img=loadImage("Images/Tankbotton3.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(rgb(198,135,103));
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    //game.end();
  }
}
