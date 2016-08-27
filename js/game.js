define(["pixi", "util/inherit"], function(pixi, inherit) {
   "use strict";

    function Game() {
        PIXI.Container.call(this);

        var texture = PIXI.Texture.fromImage("assets/boxium.png");
        // create a new Sprite using the texture
        var boxium = new PIXI.Sprite(texture);

        // center the sprites anchor point
        boxium.anchor.x = 0.5;
        boxium.anchor.y = 0.5;

        // move the sprite t the center of the screen
        boxium.position.x = 200;
        boxium.position.y = 150;

        this.addChild(boxium);
    }

    inherit(Game, PIXI.Container);

    return Game;
});