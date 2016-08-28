define(["./BaseScreen", "../util/inherit", "Events", "./ScreenEvent", "./ScreenList", "Machine", "Storage"],
    function(BaseScreen, inherit, Events, ScreenEvent, ScreenList, Machine, Storage) {
    "use strict";

    function GameScreen() {
        BaseScreen.call(this);
    }

    inherit(GameScreen, BaseScreen);

    GameScreen.prototype.show = function() {
        console.log("game screen show");
        //this.emit(ScreenEvent.CHANGE_SCREEN, ScreenList.GAME_SCREEN);

        this.machine = new Machine();
        this.machine.x = 10;
        this.machine.y = 10;
        this.addChild(this.machine);

        this.storage = new Storage();
        this.storage.x = 200;
        this.storage.on(Events.ELEMENT_DROPPED, this.onElementDropped);
        this.addChild(this.storage);
    };

    GameScreen.prototype.onElementDropped = function(element) {
        this.machine.check(element);
    };

    GameScreen.prototype.clear = function() {
        this.storage.off(Events.ELEMENT_DROPPED, this.onElementDropped);


    };

    return GameScreen;
});