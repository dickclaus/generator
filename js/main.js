requirejs.config({
    baseUrl: "js",
    paths: {
        pixi: "lib/pixi",
        timeline: "lib/TimelineLite",
        tween: "lib/TweenLite"
    }
});

requirejs(["pixi", "App"],
function (pixi, App) {

    var app = new App();

    WebFont.load({
        google: {
            families: ["Orbitron"]
        },
        active: function() {
            app.init();
        }

    });

});

