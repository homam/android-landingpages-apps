(function () {
    var gamedata = {
        imageFiles: [
		"library/alienbomb.png",
		"library/starfightersheet.gif",
		"library/characterset.gif",
		"library/entities.png",
		"library/explosion.png",
		"library/gamebackdrop.gif",
		"library/earth.gif",
		"library/gameover.png",
		"library/hiscore.png",
		"library/level.png",
		"library/levelcomplete.png",
		"library/levelflag.png",
		"library/marker.png",
		"library/monstersheet.png",
		"library/numbers.png",
		"library/playericon.png",
		"library/playermissile.png",
		"library/playersheet.png",
		"library/playpause.png",
		"library/pregame.gif",
		"library/spark.png",
		"library/star.png",
		"library/staricon.png",
		"library/titlescreen.png",
		"library/volumecontrols.png"
	],
        audioFiles: [
		{ name: "titlemusic", path: "sfx/titlemusic.mp3", volume: 20, repeat: true },
		{ name: "playershot", path: "sfx/shot.mp3", volume: 100, repeat: false },
		{ name: "bonusitem", path: "sfx/bonusitem.mp3", volume: 100, repeat: false },
		{ name: "entityappears", path: "sfx/entity.mp3", volume: 100, repeat: false },
		{ name: "explosion", path: "sfx/explosion.mp3", volume: 100, repeat: false },
		{ name: "powerup", path: "sfx/powerup.mp3", volume: 100, repeat: false },
		{ name: "magicdeath", path: "sfx/magicdeath.mp3", volume: 100, repeat: false },
		{ name: "wavecomplete", path: "sfx/wavecomplete.mp3", volume: 100, repeat: false },
		{ name: "regen", path: "sfx/regen.mp3", volume: 100, repeat: false },
		{ name: "saucerbomb", path: "sfx/saucerbomb.mp3", volume: 100, repeat: false },
		{ name: "hyperdrive", path: "sfx/hyperdrive.mp3", volume: 100, repeat: false }
	]
    };

    window.hypergunner = window.hypergunner || {};
    window.hypergunner.gamedata = gamedata;
})();