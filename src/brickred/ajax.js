brickred.ajax = function (requestURL, params, callback, method) {
    callback = (typeof callback !== "undefined") ? callback : null;
    method = (typeof method !== "undefined") ? method : "get";
    var httpRequest;
    var queryParamsBuffArray = [];
    var queryParams = "";

    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!httpRequest) {
        return null;
    }

    httpRequest.onreadystatechange = function() {
        var text;

        if (4 === httpRequest.readyState &&
            200 === httpRequest.status) {
            if (callback != null) {
                text = httpRequest.responseText;
                callback(text);
            }
        }
    }

    for (var p in params) {
        if (params.hasOwnProperty(p)) {
            queryParamsBuffArray.push(p + "=" + encodeURIComponent(params[p]));
        }
    }
    queryParams = queryParamsBuffArray.join("&");

    if ("get" === method || "GET" === method) {
        httpRequest.open("GET", requestURL + "?" + queryParams, true);
        httpRequest.send(null);
    } else if ("post" === method || "POST" === method) {
        httpRequest.open("POST", requestURL, true);
        httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpRequest.setRequestHeader("Content-length", queryParams.length);
        httpRequest.setRequestHeader("Connection", "close");
        if (requestURL.indexOf("?") !== -1) {
            httpRequest.send(queryParams);
        } else {
            httpRequest.send("?" + queryParams);
        }

    } else {
        return null;
    }

    return httpRequest;
}

