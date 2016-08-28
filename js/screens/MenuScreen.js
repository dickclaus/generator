define(["./BaseScreen", "../util/inherit", "./ScreenEvent", "./ScreenList"], function(BaseScreen, inherit, ScreenEvent, ScreenList) {
    "use strict";

    function MenuScreen() {
        BaseScreen.call(this);
    }

    inherit(MenuScreen, BaseScreen);

    MenuScreen.prototype.show = function() {
        console.log("menu screen show");
        this.emit(ScreenEvent.CHANGE_SCREEN, ScreenList.GAME_SCREEN);
    };

    return MenuScreen;
});