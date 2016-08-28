define(["pixi", "util/inherit", "util/bindAll", "Events", "elements/Elements", "elements/Element"],
    function(pixi, inherit, bindAll, Events, Elements, Element) {
    "use strict";

    function Storage() {
        PIXI.Container.call(this);
        bindAll(this);

        this.elements = [];
        this.createBaseElements();
    }

    inherit(Storage, PIXI.Container);

    Storage.prototype.createBaseElements = function() {
        var len = Elements.base.length;
        for (var i = 0; i < len; i++) {
            var element = new Element();
            var baseElementId = Elements.base[i];
            element.configure(Elements.config[baseElementId]);
            this.elements.push(element);
            element.x = i * 32;
            element.on("mousedown", this.onDragStart);
            element.on("touchstart", this.onDragStart);

            this.addChild(element);
        }
    };

    Storage.prototype.onDragStart = function(event) {
        var element = event.target;
        var el = element.clone();
        el.position.set(element.x, element.y);
        el.dragging = true;
        el.data = event.data;
        el.alpha = 0.5;
        this.addChild(el);

        el.on("mouseup", this.onDragEnd);
        el.on("mouseupoutside", this.onDragEnd);
        el.on("touchend", this.onDragEnd);
        el.on("touchendoutside", this.onDragEnd);

        el.on("mousemove", this.onDragMove);
        el.on("touchmove", this.onDragMove);
    };

    Storage.prototype.onDragEnd = function(event) {
        var element = event.target;
        this.emit(Events.ELEMENT_DROPPED, element);
        element.alpha = 1;
        element.dragging = false;
        element.data = null;
        this.removeChild(element);
    };

    Storage.prototype.onDragMove = function(event) {
        var element = event.target;
        if (element.dragging)
        {
            var newPosition = element.data.getLocalPosition(element.parent);
            element.position.x = newPosition.x - 15;
            element.position.y = newPosition.y - 15;
        }
    };

    return Storage;
});