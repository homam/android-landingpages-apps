(function () {

    function spritesheet(s) {
        this.sheet = s;
        this.sheetname = s.sheetname;
        this.type = s.type;
        this.height = s.height;
        this.width = s.width;
        this.framewidth = s.framewidth;
        this.frameheight = s.frameheight;
        this.framedelay = s.framedelay;
        this.framesperdirection = s.framesperdirection;
        this.deathframe = s.deathframe;
        this.deathframecount = s.deathframecount;
        this.attackframe = s.attackframe;
        this.attackframecount = s.attackframecount;
        this.painframe = s.painframe;
        this.painframecount = s.painframecount;

        this.image = new Image();
        this.image.setAttribute("id", this.sheetname);
        this.image.src = s.src;
    };

    function sprite(id, nameid, spritesheet, x, y, speed, direction, visible) {
        this.id = id;
        this.nid = nameid;
        this.spritesheet = spritesheet;

        this.frame = 0; this.startframe = 0;
        this.framedelay = spritesheet.framedelay;
        this.framedelaymax = spritesheet.framedelay;

        this.x = x;
        this.y = y;
        this.oldx = x;
        this.oldy = y;
        this.targetx = -1;
        this.targety = -1;

        this.w = spritesheet.framewidth;
        this.h = spritesheet.frameheight;

        this.speed = speed;
        this.basespeed = speed;
        this.direction = direction;
        this.lastdirection = direction;

        this.offset = 0;
        this.frame = 0;
        this.row = 0; // row index

        this.visible = visible > 0 ? true : false;

        this.moveup = false;
        this.movedown = false;
        this.moveleft = false;
        this.moveright = false;

        this.angle = 0;
        this.opacity = 1;
        this.decay = 0;
        this.dying = 0;
        this.dead = false;
        this.inpain = false;

        this.nextthink = 1;
        this.basenextthink = this.nextthink;
    };

    window.wizardwars = window.wizardwars || {};
    window.wizardwars.spritesheet = spritesheet;
    window.wizardwars.sprite = sprite;
})();