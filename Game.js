class Game  {
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        tank1=createSprite(100,displayHeight-100,10,10);
        tank1.addImage("tanki",tank1Img);
        tank1.scale=0.5;
        tank2=createSprite(300,displayHeight-100,10,10);
        tank2.addImage("tank1",tank2Img)
        tank2.scale=0.5;
        tank3=createSprite(500,displayHeight-100,10,10);
        tank3.addImage("tank1",tank3Img)
        tank3.scale=0.5;
        tank4=createSprite(700,displayHeight-100,10,10)
        tank4.addImage("tank1",tank4Img)
        tank4.scale=0.5;
        cars=[tank1,tank2,tank3,tank4];
      }

      play(){
        form.hide();
      
    Player.getPlayerInfo();
    Tankshooter=rect(tank1.x,tank1.y-70,30,10)

    if(allPlayers !== undefined){
     
 
      //var display_position = 100;
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
      
      
    }
    
    drawSprites();
      
  }

}