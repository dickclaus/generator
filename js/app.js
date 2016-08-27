define(["util/bindAll", "game"], function(bindAll, Game) {
   "use strict";

    function App() {
        bindAll(this);
        this.game = new Game();

        // create a renderer instance.
        this.renderer = PIXI.autoDetectRenderer(400, 300);

        // add the renderer view element to the DOM
        document.body.appendChild(this.renderer.view);

        this.requestFrame();
    }

    App.prototype.requestFrame = function() {
        this.renderer.render(this.game);
        console.log("request Frame");
        window.requestAnimationFrame(this.requestFrame);
    };

    return App;
});