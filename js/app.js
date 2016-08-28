define(["util/bindAll", "Game"], function(bindAll, Game) {
   "use strict";

    function App() {
        bindAll(this);
    }

    App.prototype.init = function() {
        this.game = new Game();

        // create a renderer instance.
        this.renderer = PIXI.autoDetectRenderer(400, 300);

        // add the renderer view element to the DOM
        document.body.appendChild(this.renderer.view);

        this.requestFrame();
    };

    App.prototype.requestFrame = function() {
        window.requestAnimationFrame(this.requestFrame);
        this.renderer.render(this.game);
    };

    return App;
});