/// <reference path="../vipgames.api.js" />


(function () {
    var filesToBeLoaded = 0;
    var vgApi = null, scene = null;

    var scripts = ['script/classlib.js', 'script/resources.js', 'script/soundmanager2.js', 'script/data.js', 'script/game.js'];
    var styles = [window.screen.availWidth > 480 ? 'css/desktop.css' : 'css/iphone.css'];

    filesToBeLoaded += (scripts.length);

    var checkLoadComplete = function () {
        if (filesToBeLoaded <= 0) {
            var wizardwars = window.wizardwars;

            wizardwars.load_game(vgApi); // load the game

            var keydownHandler = wizardwars.scanInput;
            var keyupHandler = wizardwars.stopMove;

            wizardwars.init(); // init
            // register UI event handlers
            window.addEventListener("keydown", function (event) { keydownHandler(event); }, false);
            window.addEventListener("keyup", function (event) { keyupHandler(event); }, false);

            vgApi.game_load(
                {
                    getScores: function () { return wizardwars.gameHandler.getScores(); },
                    stop: function () { wizardwars.gameHandler.die(); },
                    restart: function () {
                        // the game automatically restarts by mousemove/tap
                    },
                    unload: function () {
                        scene.innerHTML = "";
                        window.removeEventListener('keydown', keydownHandler, false);
                        window.removeEventListener('keyup', keyupHandler, false);
                    }
                }
            );
        }
    };

    vipgames.api.register({
        game_id: 'spacem.wizardwars',
        load: function (api) {
            scene = api.getScene();

            for (var i = 0; i < scripts.length; i++) {
                var sel = document.createElement("script");
                sel.setAttribute("type", "text/javascript");
                sel.onload = function () {
                    filesToBeLoaded--;
                    checkLoadComplete();
                };
                sel.src = scripts[i];
                scene.appendChild(sel);
            }

            for (var i = 0; i < styles.length; i++) {
                var sel = document.createElement("link");
                sel.setAttribute("type", "text/css");
                sel.setAttribute("rel", "stylesheet");
                sel.href = styles[i];
                scene.appendChild(sel);
            }

            var canvas = document.createElement("canvas");
            canvas.id = 'wizardwarscanvas';
            canvas.setAttribute("width", "320");
            canvas.setAttribute("height", "460");
            scene.appendChild(canvas);

            var console = document.createElement('div');
            console.id = 'console';
            scene.appendChild(console);

            vgApi = api;
        }
    });
})();