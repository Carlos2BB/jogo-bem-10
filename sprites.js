function drawSprite(ctx, x, y, p, sprite, colors) {
    for (let r = 0; r < sprite.length; r++) {
        for (let c = 0; c < sprite[r].length; c++) {
            const px = sprite[r][c];
            if (px) {
                ctx.fillStyle = colors[px];
                ctx.fillRect(x + c * p, y + r * p, p, p);
            }
        }
    }
}

const SPRITES = {
    ben: {
        idle: [
            [0,1,1,0],
            [1,2,2,1],
            [0,3,3,0],
            [4,0,0,4]
        ],
        colors: {
            1:"#654321",
            2:"#ffe0bd",
            3:"#00ff00",
            4:"#000"
        }
    },
    fogo: {
        idle: [
            [0,1,1,0],
            [1,2,2,1],
            [0,3,3,0],
            [1,0,0,1]
        ],
        colors: {
            1:"#ff4500",
            2:"#ff8c00",
            3:"#ffff00"
        }
    },
    fogoSupremo: {
        idle: [
            [0,1,1,0],
            [1,2,2,1],
            [0,3,3,0],
            [4,4,4,4]
        ],
        colors: {
            1:"#ffffff",
            2:"#ff4500",
            3:"#ffff00",
            4:"#ff0"
        }
    }
};
