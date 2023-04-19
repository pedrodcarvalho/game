const root = document.getElementById('root');

class Screen {
    constructor() {
        this.screen = document.createElement('canvas');

        root.appendChild(this.screen);

        this.screen.width = window.innerWidth;
        this.screen.height = window.innerHeight;

        this.ctx = this.screen.getContext('2d');
    }

    draw() {
        this.ctx.fillStyle = '#181818';
        this.ctx.fillRect(0, 0, this.screen.width, this.screen.height);
    }
}

export default Screen;
