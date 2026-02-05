let enemies = [
    { x: 600, y: 432, vida: 30 },
    { x: 900, y: 432, vida: 30 }
];

function updateEnemies(player) {
    enemies.forEach(e => {
        if (Math.abs(player.x - e.x) < 200) {
            e.x += player.x > e.x ? 1 : -1;
        }
    });
}
