define(function() {
   "use strict";

    var Elements = {};

    Elements.CIRCULIUM = "CIRCULIUM";
    Elements.CROSSIUM = "CROSSIUM";
    Elements.BOXIUM = "BOXIUM";
    Elements.DOTIUM = "DOTIUM";

    Elements.config = {};
    Elements.config[Elements.CIRCULIUM] = {positions:[0,1,0,1,0,1,0,1,0], color: 0x493dde};
    Elements.config[Elements.CROSSIUM] =  {positions:[1,0,1,0,1,0,1,0,1], color: 0xa100ff};
    Elements.config[Elements.BOXIUM] =    {positions:[1,1,1,1,0,1,1,1,1], color: 0xecbd2b};
    Elements.config[Elements.DOTIUM] =    {positions:[0,0,0,0,1,0,0,0,0], color: 0x00e779};

    Elements.base = [Elements.CIRCULIUM, Elements.CROSSIUM, Elements.BOXIUM, Elements.DOTIUM];

    return Elements;
});