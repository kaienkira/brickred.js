brickred.parseJSON = function (text) {
    var obj;

    try {
        obj = (window.JSON && JSON.parse && JSON.parse(text)) ||
              eval("(" + text + ")");
    } catch (e) {
        obj = null;
    }

    return obj;
}

brickred.readCookie = function (key) {
    var ret;
    return (ret = new RegExp('(?:^|; )' + encodeURIComponent(key) +
                             '=([^;]*)').exec(document.cookie))
           ? (ret[1]) : null;
}

