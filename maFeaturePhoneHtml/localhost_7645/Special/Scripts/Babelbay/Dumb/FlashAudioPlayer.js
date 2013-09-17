var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FlashAudioPlayer = (function (_super) {
    __extends(FlashAudioPlayer, _super);
    function FlashAudioPlayer() {
        _super.call(this);
        this._queryStringCacheReset = 2;
        this._container = (function () {
            var e = document.createElement("div");
            e.id = 'FlashAudioPlayer-container';
            document.body.appendChild(e);
            return e;
        })();
    }
    FlashAudioPlayer.prototype._reMake = function () {
        var swf = "special/scripts/Babelbay/Dumb/FlashAudioPlayer2a3b.swf?r=" + this._queryStringCacheReset;
        var html = "<span id='DefaultAudioPlayer-container' style='display: block; width: 1px; height: 1px; position: fixed; top: 100px; left: 2px; z-index:1000'>" + "<object width='1' height='1' id='DefaultAudioPlayer-player' type='application/x-shockwave-flash' data='" + swf + "'>" + "<param name='movie' value='" + swf + "' />" + "<param name='quality' value='high' />" + "<param name='allowfullscreen' value='true' />" + "<param name='bgcolor' value='#ffffff' />" + "<param name='play' value='true' />" + "<param name='loop' value='true' />" + "<param name='scale' value='showall' />" + "<param name='devicefont' value='false' />" + "<param name='salign' value='' />" + "<param name='allowScriptAccess' value='always' />" + "<param name='FlashVars' value='foo=" + escape(this.url) + "' />" + "</object>" + "</span>";
        this._container.innerHTML = html;
    };
    FlashAudioPlayer.prototype.start = function () {
        this._reMake();
        document.getElementById('DefaultAudioPlayer-container').style.display = "block";
        _super.prototype.start.call(this);
    };
    FlashAudioPlayer.prototype.stop = function () {
        document.getElementById('DefaultAudioPlayer-container').style.display = "none";
        _super.prototype.stop.call(this);
    };
    FlashAudioPlayer._supported = null;
    FlashAudioPlayer.supported = function supported() {
        if(FlashAudioPlayer._supported == null) {
            if(!!window.navigator) {
                FlashAudioPlayer._supported = (typeof navigator.plugins == "undefined" || navigator.plugins.length == 0) ? ("undefined" != typeof ActiveXObject) : true;
            } else {
                FlashAudioPlayer._supported = false;
            }
        }
        return FlashAudioPlayer._supported;
    }
    return FlashAudioPlayer;
})(AudioPlayerBase);
