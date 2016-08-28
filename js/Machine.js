define(["pixi", "util/inherit"], function(pixi, inherit) {
    "use strict";

    function Machine() {
        PIXI.Container.call(this);

        var texture = PIXI.Texture.fromImage("assets/machine.png");
        var machine = new PIXI.Sprite(texture);
        this.addChild(machine);
    }

    inherit(Machine, PIXI.Container);

    Machine.prototype.check = function(element) {
        var position = new PIXI.Point(element.position.x, element.position.y);
        console.log(element.position);
        console.log(element.toGlobal(position));
        console.log(this.x, this.y);
    };

    return Machine;
});