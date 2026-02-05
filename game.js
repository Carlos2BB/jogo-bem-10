function update(keys) {
    updatePlayer(keys);
    updateEnemies(player);
    updateProjectiles();
    updateCamera(player);

    forma.innerText = player.forma + (player.supremo ? " SUPREMO" : "");
    vida.innerText = Math.floor(player.vida);
    energia.innerText = Math.floor(player.energia);
}

function draw(ctx) {
    ctx.clearRect(0,0,960,540);

    ctx.fillStyle = "#222";
    ctx.fillRect(-cameraX, MAP.ground, MAP.width, 80);

    let sprite = player.forma;
    if (player.supremo && sprite === "fogo") sprite = "fogoSupremo";

    drawSprite(
        ctx,
        player.x - cameraX,
        player.y,
        SPRITES[sprite].idle,
        SPRITES[sprite].colors
    );

    enemies.forEach(e => {
        ctx.fillStyle = "#a00";
        ctx.fillRect(e.x - cameraX, e.y, 64, 64);
    });

    drawProjectiles(ctx);
}
