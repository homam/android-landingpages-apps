function onVi() {
    console.log('API loaded.');
    vipgames.api.register({
        game_id: 'HexWars',
        load: function (o) {
            console.log('Game requested.');
            window._vi = o;
            var s = o.getScene();
            if (!s) {
                s = document.createElement('div');
                document.body.appendChild(s);
            }
            s.className = 'gm4html5_div_class';
            s.id = 'gm4html5_div_id';
            var c = document.createElement('canvas');
            c.width = 320;
            c.height = 480;
            c.id = 'canvas';
            c.innerHTML = '<p>Your browser doesn\'t support HTML5 canvas.</p>';
            s.appendChild(c);
            var z = document.createElement('script');
            z.type = 'text/javascript';
            z.src = 'html5game/index.js'; // <- edit to game's filename
            z.onload = function () {
                console.log('Game loaded.');
                window.onload();
            }
            z.onerror = function () {
                var zf = document.createElement('script');
                zf.type = 'text/javascript';
                zf.src = 'html5game/index.js';
                zf.onload = z.onload;
                document.body.appendChild(zf);
            }
            document.body.appendChild(z);
        }
    })
}

onVi();