var brickred = brickred || {};

brickred.extend = function (dst, src) {
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
};

brickred.inherits = function (subclass, superclass) {
    function F() {}
    F.prototype = superclass.prototype;
    subclass.prototype = new F();
    subclass.prototype.constructor = subclass;
};

