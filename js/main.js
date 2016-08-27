requirejs.config({
    baseUrl: "js",
    paths: {
        pixi: "lib/pixi"
    }
});

requirejs(["pixi", "app"],
function (pixi, App) {
    console.log("main");
    var app = new App();
});

