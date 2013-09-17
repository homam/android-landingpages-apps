var AudioPlayerState;
(function (AudioPlayerState) {
    AudioPlayerState._map = [];
    AudioPlayerState.Playing = 2;
    AudioPlayerState.Stopped = 1;
})(AudioPlayerState || (AudioPlayerState = {}));
var PageEvent = (function () {
    function PageEvent() { }
    PageEvent.prototype.addHandler = function (f) {
        var arr = (this._handlers || []);
        arr.push(f);
        this._handlers = arr;
    };
    PageEvent.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            args[_i] = arguments[_i + 0];
        }
        var arr = this._handlers;
        var self = this;
        if(!!arr && arr.length > 0) {
            arr.forEach(function (f) {
                return f.apply(self, arguments);
            });
        }
    };
    return PageEvent;
})();
var AudioPlayerBase = (function () {
    function AudioPlayerBase() {
        this.state = AudioPlayerState.Stopped;
        this.startEvent = new PageEvent();
    }
    AudioPlayerBase.prototype.setAudio = function (url, length) {
        this.url = url;
        this.length = length;
        return this;
    };
    AudioPlayerBase.prototype.start = function () {
        this._lastPlay = new Date();
        this.state = AudioPlayerState.Playing;
        this.startEvent.execute();
    };
    AudioPlayerBase.prototype.stop = function () {
        this.state = AudioPlayerState.Stopped;
    };
    AudioPlayerBase.prototype.toggle = function () {
        if(AudioPlayerState.Stopped == this.state) {
            this.start();
        } else {
            var now = new Date();
            if((now.getTime() - this._lastPlay.getTime()) > this.length) {
                this.stop();
                var self = this;
                setTimeout(function () {
                    return self.start();
                }, 500);
            } else {
                this.stop();
            }
        }
    };
    AudioPlayerBase.create = function create() {
        if(Html5AudioPlayer.supported()) {
            return new Html5AudioPlayer();
        } else {
            return new FlashAudioPlayer();
        }
    }
    return AudioPlayerBase;
})();
