const Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60, //cambiar request animation frame
    width: undefined,
    height: undefined,
    framesCounter:0,
    playerKeys:{
        SPACE: 32
    },
    score:0,

    init: function(){
        this.canvas = document.getElementById('game-board');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.getAttribute("width");
        this.height = this.canvas.getAttribute("height");
        this.start()

    },

    start: function(){
        this.reset();
        let past = 0;
        let delta = 0;
        function refresh(timestamp) {
            delta = timestamp - past;
            past = timestamp;
            let fps = 1000/ delta;
            Game.clear();
            Game.drawAll();
            Game.moveAll();
            window.requestAnimationFrame(refresh)
            //console.log(fps)
        }
        //recordar borrar los obstaculos 
        window.requestAnimationFrame(refresh);
    },

    reset: function(){
        this.background = new Background(this.ctx,this.width*2,this.height);
        this.player = new Player(this.ctx,4.98,3.51)
        //obstacles
        //scoreBoard.init()
    },

    clear: function() {
        this.ctx.clearRect(0,0,this.width,this.height);
    },

    drawAll: function() {
        this.background.draw();
        this.player.draw(/*this.framesCounter*/)
        //this.obstacles= [];
        //ScoreBoard.init(this.ctx,this.score);
    },

    moveAll: function() {
        this.background.move();
        this.player.newPos();
        //obstacles
    }
}

