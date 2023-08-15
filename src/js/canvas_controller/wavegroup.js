import { Wave } from './wave.js';

export class WaveGroup{
    constructor(){
        this.totalWaves = 3;

        this.totalPoints = 6;
        this.color_mouseon = ['rgba(0,185,206,0.4)','rgba(160,206,222,0.4)','rgba(0,100,162,0.4)'];
        this.color_mouseout = ['rgba(10, 10, 10, 0.4)', 'rgba(100, 100, 100, 0.4)', 'rgba(200, 200, 200, 0.4)'];
        this.color = this.color_mouseout;
        this.waves = [];
        
        for (let i = 0; i < this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );

            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight){
        for (let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx){
        for (let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }

    set_color(flag_mouseon) {

        if (flag_mouseon == true) {
            this.color = this.color_mouseon;
        } else {
            this.color = this.color_mouseout;
        }
        

        for (let i = 0; i < this.totalWaves; i++){
            this.waves[i].color = this.color;
        }
        
    }
}