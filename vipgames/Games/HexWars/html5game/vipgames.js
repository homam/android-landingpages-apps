var vipgames = vipgames || {};

// vipgames.utils

vipgames.utils = vipgames.utils || {};

// Extends original with extension and returns the newly extended original object.
vipgames.utils.extend = vipgames.utils.extend || (function () {
    return function (original, extension, override) {
        var ov = !!override;
        if (!original) throw 'original object expected';
        for (var p in extension)
            if (ov || !original[p])
                original[p] = extension[p];

        return original;
    };
})();

vipgames.utils = vipgames.utils.extend({
    log: function () {
        if (!!console && !!console.log) console.log.apply(console, arguments);
    }
}, vipgames.utils);

vipgames.utils = vipgames.utils.extend({ error:
    function (message) {
        vipgames.utils.log("ERR: ", message);
        throw message;
    }
}, vipgames.utils);

vipgames.utils = vipgames.utils.extend({ 
    // Returns a random string
    rndstr: function (L) 
    {
        var s = '';
        var randomchar = function () {
            var n = Math.floor(Math.random() * 62);
            if (n < 10) return n; //1-10
            if (n < 36) return String.fromCharCode(n + 55); //A-Z
            return String.fromCharCode(n + 61); //a-z
        }
        while (s.length < L) s += randomchar();
        return s;
    }
}, vipgames.utils);

vipgames.utils = vipgames.utils.extend({
    // Creates a delegate for {func}.
    delegate: function (func, _this) {
        return function () { func.apply(_this, arguments); };
    }
}, vipgames.utils);

// end vipgames.utils

vipgames.ui = vipgames.ui || {};
vipgames.ui._documentLoaded = false; // true: if document is already loaded


vipgames.api = vipgames.api || {};

vipgames.api._internals = {
    current_game: null,
    current_player_id: 1, // override this value in real games
    games: [],
    // override this function to actually handlle the game_event.
    on_game_event_handler: function (modifiedEventArgs, originalEventArgs, callback) {
        // simulate an AJAX call
        setTimeout(function () {
            var data = {};
            if (modifiedEventArgs.event_name == "game_start")
                data.play_session_id = parseInt(Math.random() * 100000); // simulate a play_session_id
            callback(data, modifiedEventArgs, originalEventArgs);
            if ('game_quit' == modifiedEventArgs.event_name)
                alert('Quit!');
        }, 100);
    },
    loadCurrentGame: function (gameStartArgs) {
        // on is a static method that tracks events and returns play_session_id in game_start callback.
        var on = function (modifiedEventArgs, originalEventArgs, callback) {
            (function () {
                // log:
                var loggableObject = vipgames.utils.extend({}, modifiedEventArgs);
                delete loggableObject["session_id"];
                delete loggableObject["player_id"];
                delete loggableObject["play_session_id"];
                delete loggableObject["event_name"];
                delete loggableObject["game_id"];
                vipgames.utils.log(modifiedEventArgs.game_id + " on " + modifiedEventArgs.event_name + '()', JSON.stringify(loggableObject));
            })();

            vipgames.api._internals.on_game_event_handler.apply(this, arguments);
        };

        // returns a delegate for game_load, game_start, level_start, level_end, game_end API functions
        // note more functionalities can be added using
        // 3.speicalFunc (async, in callback) works after AJAX call on the received data, before callback() is called.
        // 2.speicalCheckFunc (checks the current state and throws exceptions if the game is in an invalid state)
        // 1.eventArgsAmpifier (amplify eventArgs and perfom operations prior to making modifiedEventArgs and calling on function) - used in game_load
        var getOn = function (name, specialFunc, specialCheckFunc, eventArgsAmplifier) {
            return function (eventArgs, callback) {
                // this: api object

                if (!!eventArgsAmplifier)
                    vipgames.utils.delegate(eventArgsAmplifier, this)(eventArgs);

                // if the first argument is a callback function, then this on function must have been called by one argument.
                if ((typeof eventArgs == 'function') && !callback) {
                    callback = eventArgs;
                    eventArgs = null;
                }

                modifiedEventArgs = vipgames.utils.extend({
                    event_name: name,
                    game_id: this._game.game_id,
                    scores: this._game.getScores(),
                    session_id: this._session_id,
                    player_id: this._player_id,
                    play_session_id: this._play_session_id
                }, eventArgs, false);

                // validate the state
                var speicalCheckFuncDelegate = !!specialCheckFunc ? vipgames.utils.delegate(specialCheckFunc, this) : null;
                if (speicalCheckFuncDelegate) {
                    speicalCheckFuncDelegate(modifiedEventArgs);
                }

                var speicalFuncDelegate = !!specialFunc ? vipgames.utils.delegate(specialFunc, this) : null;

                on(modifiedEventArgs, eventArgs, function (data, modifiedEventArgs, eventArgs) {
                    if (!!speicalFuncDelegate) speicalFuncDelegate(data);
                    if (!!callback) callback(data, modifiedEventArgs, eventArgs);
                });
            };
        };

        // create the API object and pass it to the game.load()
        var api_instance = {
            _session_id: gameStartArgs.session_id,
            _player_id: gameStartArgs.player_id,
            _play_session_id: null,
            _play_sessions: [],
            _game: null,
            _original_game_handler: this.current_game,
            _getLastPlaySession: function () {
                var length = this._play_sessions.length;
                return length > 0 ? this._play_sessions[length - 1] : null;
            },
            _checkPlaySession: function (forceExisted, forceStarted, forceEnded, functionName) {
                var playSession = this._getLastPlaySession();

                var ended = !playSession || !!playSession.end_date;
                var started = !!playSession && !playSession.end_date;

                if ((forceStarted && !started) || (forceExisted && !playSession)) {
                    vipgames.utils.error('game_start() must have been called, before ' + functionName + '()');
                }

                if (forceEnded && !ended) {
                    vipgames.utils.error('game_end() must have been called, before ' + functionName + '()');
                }

                return playSession;
            },
            getScene: function () { return document.getElementById('vipgames_game_scene'); },
            game_load: getOn('game_load', null, null, function (eventArgs) {
                this._game = eventArgs;
                this._game.game_id = this._original_game_handler.game_id;
                vipgames.api._internals.current_game._interface = this._game;
            }),
            game_start: getOn('game_start', function (data) {
                this._play_session_id = data.play_session_id;
                this._play_sessions.push({ play_sessoin_id: data.play_session_id, start_date: new Date() });
            }, function () {
                this._checkPlaySession(false, false, true, 'game_start');
            }),
            level_start: getOn('level_start', null, function () {
                this._checkPlaySession(true, true, false, 'level_start');
            }),
            level_end: getOn('level_end', null, function () {
                this._checkPlaySession(true, true, false, 'level_end');
            }),
            game_end: getOn('game_end', null, function () {
                var playSession = this._checkPlaySession(true, true, false, 'game_end');
                playSession.end_date = new Date();
                playSession.scores = this._game.getScores();
            }),
            game_quit: getOn('game_quit', function () {

            }, function () {
                this._checkPlaySession(false, false, false, 'game_quit');
            }, null)
        };

        this.current_game.load(api_instance);
        vipgames.api._internals.current_api_instance = api_instance;
    }
};

vipgames.api.register = function (game) {
    vipgames.api._internals.games.push(game);
    vipgames.api._internals.current_game = game;

    // starts the currently registered game
    // in this test version, the game loads immediately after document.load


    var f = function () { vipgames.api._internals.loadCurrentGame({ session_id: vipgames.utils.rndstr(9), player_id: vipgames.api._internals.current_player_id }); };

    if (vipgames.ui._documentLoaded) f();
    else
        window.addEventListener('load', function () {
            f();
        }, false);
};

window.addEventListener('load', function () {
    vipgames.ui._documentLoaded = true;
}, false);