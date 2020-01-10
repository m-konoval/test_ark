var Game = {
    ctx: undefined,
    w: undefined,
    h: undefined,
    imgs: {
        bg: undefined,
        ball: undefined,
        block: undefined,
        plat: undefined
    },

    start: function() {
        var canvas = document.getElementById("cvs");
        this.ctx = canvas.getContext("2d");
        console.log('statt')


        this.imgs.bg = new Image();
        this.imgs.bg.src = "img/bg.png";

        this.run();
    },

    render: function() {
        this.ctx.drawImage(this.imgs.bg, 0, 0);
    },


    run: function() {
        this.render();

        window.requestAnimationFrame(function() {
            Game.run();
        });
    }
};


function init() {
    Game.start();
}


window.onload = init;