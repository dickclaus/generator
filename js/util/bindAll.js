define(function() {
   "use strict";

    function bindAll(object) {
        for (var property in object) {
            if (typeof object[property] === "function") {
                object[property] = object[property].bind(object);
            }
        }
    }

    return bindAll;
});