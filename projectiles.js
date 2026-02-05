let projectiles = [];

function spawnProjectile(x, y, dir, tipo) {
    projectiles.push({
        x, y,
        dx: dir * 8,
        tipo,
        vida: 60
    });
}

function updateProjectiles() {
    projectiles.forEach(p => {
        p.x += p.dx;
        p.vida--;

        enemies.forEach(e => {
            if (Math.abs(p.x - e.x) < 40) {
                e.vida -= p.tipo === "fogo" ? 20 : 10;
                p.vida = 0;
            }
        });
    });

    projectiles = projectiles.filter(p => p.vida > 0);
}

function drawProjectiles(ctx) {
    projectiles.forEach(p => {
        ctx.fillStyle = p.tipo === "fogo" ? "#ff4500" : "#00ffff";
        ctx.fillRect(p.x - cameraX, p.y, 16, 16);
    });
}
