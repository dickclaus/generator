define(["pixi", "util/inherit", "Machine", "screens/ScreenManager", "screens/MenuScreen", "screens/GameScreen", "screens/ScreenList"],
    function(pixi, inherit, Machine, ScreenManager, MenuScreen, GameScreen, ScreenList) {
   "use strict";

    function Game() {
        PIXI.Container.call(this);

        this.screenManager = new ScreenManager();
        this.screenManager.registerScreen(ScreenList.MENU_SCREEN, MenuScreen);
        this.screenManager.registerScreen(ScreenList.GAME_SCREEN, GameScreen);
        this.addChild(this.screenManager);

        this.screenManager.showScreen(ScreenList.MENU_SCREEN);

        // var texture = PIXI.Texture.fromImage("assets/boxium.png");
        // // create a new Sprite using the texture
        // var boxium = new PIXI.Sprite(texture);
        //
        // // center the sprites anchor point
        // boxium.anchor.x = 0.5;
        // boxium.anchor.y = 0.5;
        //
        // // move the sprite t the center of the screen
        // boxium.position.x = 200;
        // boxium.position.y = 150;
        //
        // this.addChild(boxium);
        //
        // var machine = new Machine();
        // this.addChild(machine);
        //
        // var countingText = new PIXI.Text('COUNT 4EVAR: 0', { fontFamily: "Orbitron", fontSize:"30px", fill: "#9ed9ee", align: "center" });
        // countingText.position.x = 200;
        // countingText.position.y = 200;
        // countingText.anchor.x = 0.5;
        // this.addChild(countingText);
    }

    inherit(Game, PIXI.Container);

    return Game;
});