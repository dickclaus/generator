define(["pixi", "util/inherit", "util/bindAll", "./ScreenEvent"], function(pixi, inherit, bindAll, ScreenEvent) {
   "use strict";

    function ScreenManager() {
        PIXI.Container.call(this);
        bindAll(this);
        this.registeredScreens = {};
        this.currentScreen = null;
    }

    inherit(ScreenManager, PIXI.Container);

    ScreenManager.prototype.registerScreen = function(screenId, screenClass) {
        this.registeredScreens[screenId] = screenClass;
    };

    ScreenManager.prototype.showScreen = function(screenId) {
        if (this.currentScreen) {
            this.currentScreen.off(ScreenEvent.CHANGE_SCREEN, this.onChangeScreen);
            this.currentScreen.hide();
            this.removeChild(this.currentScreen);
        }

        var screenClass = this.registeredScreens[screenId];
        if (screenClass) {
            this.currentScreen = new screenClass();
            this.currentScreen.on(ScreenEvent.CHANGE_SCREEN, this.onChangeScreen);
            this.currentScreen.show();
            this.addChild(this.currentScreen);
        }

    };

    ScreenManager.prototype.onChangeScreen = function(screenId) {
        this.showScreen(screenId);
    };

    return ScreenManager;
});