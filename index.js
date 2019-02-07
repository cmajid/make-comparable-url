var decode = require('urldecode')
var unescape = require('unescape');

exports.getCompareableUrl = function (url){
    let _url = decode(url);
    _url = unescape(_url.toString(), null);
    _url.toString().trim().toLowerCase();
    _url = Replace(_url, " ", "-");
    _url = Replace(_url, "?", "-");
    _url = Replace(_url, "https://", "-");
    _url = Replace(_url, "http://", "-");
    _url = Replace(_url, "/", "-");
    _url = Replace(_url, "&", "-");
    _url = Replace(_url, "=", "-");
    _url = Replace(_url, ".", "-");
    _url = Replace(_url, "wwww.", "-");
    return _url;
}

exports.compareUrl = function (url1 ,url2 ){
    return getCompareableUrl(url1) == getCompareableUrl(url2);
}