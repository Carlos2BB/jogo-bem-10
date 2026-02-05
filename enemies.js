let enemies = [
    { x: 600, y: 396, vida: 40 },
    { x: 900, y: 396, vida: 40 }
];

function updateEnemies(player) {
    enemies.forEach(e => {
        if (Math.abs(player.x - e.x) < 200) {
            e.x += player.x > e.x ? 1 : -1;
        }

        if (Math.abs(player.x - e.x) < 40) {
            player.vida -= 0.3;
        }
    });

    enemies = enemies.filter(e => e.vida > 0);
}
