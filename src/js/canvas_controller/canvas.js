import {WaveGroup} from "./wavegroup.js"

class WaveCanvas{
    constructor() {
        this.canvas = document.getElementById("canvas-btn");
        this.ctx = this.canvas.getContext('2d');

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);

        //resize_part
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        this.resize();
        

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.getElementById('canvas-btn').offsetWidth;
        this.stageHeight = document.getElementById('canvas-btn').offsetHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
        
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);
    }

}

window.onload = () => {
    let waveCanvas = new WaveCanvas();

    let apply_div = document.getElementById("apply-div");

    apply_div.onmouseover = function() {
        console.log("mouse on");
        waveCanvas.waveGroup.set_color(true);
    }
    
    apply_div.onmouseleave = function() {
        waveCanvas.waveGroup.set_color(false);
    }
}