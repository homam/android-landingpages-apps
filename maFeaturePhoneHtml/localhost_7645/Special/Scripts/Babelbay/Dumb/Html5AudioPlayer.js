var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Html5AudioPlayer = (function (_super) {
    __extends(Html5AudioPlayer, _super);
    function Html5AudioPlayer() {
        _super.call(this);
        this._container = (function () {
            var e = document.createElement("div");
            e.id = 'Html5AudioPlayer-container';
            document.body.appendChild(e);
            return e;
        })();
    }
    Html5AudioPlayer.prototype._reMake = function () {
        if(!!this.audio) {
            this.audio.pause();
        } else {
            this.audio = document.createElement("audio");
            this._container.appendChild(this.audio);
        }
        this.audio.src = this.url;
        this.audio.load();
        try  {
            this.audio.volume = 1;
        } catch (ex) {
        }
    };
    Html5AudioPlayer.prototype.start = function () {
        this._reMake();
        this.audio.play();
        _super.prototype.start.call(this);
    };
    Html5AudioPlayer.prototype.stop = function () {
        this.audio.pause();
        this._container.removeChild(this.audio);
        this.audio = null;
        _super.prototype.stop.call(this);
    };
    Html5AudioPlayer._supported = null;
    Html5AudioPlayer.supported = function supported() {
        if(Html5AudioPlayer._supported == null) {
            var e = document.createElement("audio");
            Html5AudioPlayer._supported = (!!e && !!e.play);
        }
        return Html5AudioPlayer._supported;
    }
    return Html5AudioPlayer;
})(AudioPlayerBase);
