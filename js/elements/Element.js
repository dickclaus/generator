define(["pixi", "util/inherit"], function(pixi, inherit) {
    "use strict";

    function Element() {
        PIXI.Container.call(this);

        this.SIZE = 10;
        this.positions = null;
        this.colors = [];
        this.interactive = true;
        this.buttonMode = true;
        this.graphics = new PIXI.Graphics();
        this.addChild(this.graphics);
    }

    inherit(Element, PIXI.Container);

    Element.prototype.configure = function(config) {
        this.positions = config.positions;

        for (var i = 0; i < config.positions.length; i++) {
            var position = config.positions[i];
            if (position) {
                this.colors[i] = config.color;
            } else {
                this.colors[i] = 0;
            }
        }

        this.update();
    };

    Element.prototype.update = function() {
        this.graphics.clear();
        for (var i = 0; i < this.positions.length; i++) {
            var col = i % 3;
            var row = Math.floor(i / 3);
            var position = this.positions[i];
            if (position) {
                this.drawElement(this.colors[i], col, row);
            } else {
                this.drawElement(0, col, row);
            }
        }
    };

    Element.prototype.drawElement = function(color, col, row) {
        this.graphics.beginFill(color, 1);
        this.graphics.drawRect(col*this.SIZE, row*this.SIZE, this.SIZE, this.SIZE);
        this.graphics.endFill();
    };

    Element.prototype.clone = function() {
        var element = new Element();
        var newPos = [];
        var newColors = [];
        for (var i = 0; i < this.positions.length; i++) {
            newPos[i] = this.positions[i];
            newColors[i] = this.colors[i];
        }
        element.positions = newPos;
        element.colors = newColors;
        element.update();
        element.pivot.set(0.5);
        return element;
    };

    return Element;
});