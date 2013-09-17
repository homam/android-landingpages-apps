(function () {
    var gamedata = {
        imageFiles: [
		"library/titlescreen.png",
		"library/entities.png",
		"library/characterset.gif",
		"library/explosion.png",
		"library/gamebackdrop.png",
		"library/gameover.png",
		"library/hiscore.png",
		"library/level.png",
		"library/levelcomplete.png",
		"library/marker.png",
		"library/monstersheet.png",
		"library/numbers.png",
		"library/playermissile.png",
		"library/playersheet.png",
		"library/playpause.png",
		"library/pregame.png",
		"library/spark.png",
		"library/star.png",
		"library/staricon.png",
		"library/walltops.png",
		"library/wizardicon.png",
		"library/zoltarsheet.png",
		"library/volumecontrols.png"
	],
        audioFiles: [
		{ name: "titlemusic", path: "sfx/music.mp3", volume: 20, repeat: true },
		{ name: "playershot", path: "sfx/shot.mp3", volume: 100, repeat: false },
		{ name: "bonusitem", path: "sfx/bonusitem.mp3", volume: 100, repeat: false },
		{ name: "entityappears", path: "sfx/entity.mp3", volume: 100, repeat: false },
		{ name: "entitycollect", path: "sfx/entitycollect.mp3", volume: 100, repeat: false },
		{ name: "explosion", path: "sfx/explosion.mp3", volume: 100, repeat: false },
		{ name: "powerup", path: "sfx/powerup.mp3", volume: 100, repeat: false },
		{ name: "magicdeath", path: "sfx/magicdeath.mp3", volume: 100, repeat: false }
	]
    };

    window.wizardwars = window.wizardwars || {};
    window.wizardwars.gamedata = gamedata;
})();