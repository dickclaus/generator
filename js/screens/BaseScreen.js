define(["pixi", "util/inherit", "util/bindAll", "./ScreenEvent"], function(pixi, inherit, bindAll, ScreenEvent) {
   "use strict";

    function BaseScreen() {
        PIXI.Container.call(this);
        bindAll(this);
    }

    inherit(BaseScreen, PIXI.Container);

    BaseScreen.prototype.clear = function() {

    };

    BaseScreen.prototype.hide = function() {

        this.clear();
    };

    BaseScreen.prototype.show = function() {

    };

    BaseScreen.prototype.changeScreen = function(screenId) {
        this.emit(ScreenEvent.CHANGE_SCREEN, screenId);
    };

    return BaseScreen;
});