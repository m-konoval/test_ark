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

        console.log("start");
    }
};


function init() {
    Game.start();
}


window.onload = init;