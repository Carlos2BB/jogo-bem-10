function update(keys) {
    updatePlayer(keys);
    updateEnemies(player);
    updateCamera(player);

    document.getElementById("forma").innerText =
        player.forma + (player.supremo ? " SUPREMO" : "");
    document.getElementById("vida").innerText = player.vida;
    document.getElementById("energia").innerText = Math.floor(player.energia);
    document.getElementById("fase").innerText = 1;
}

function draw(ctx) {
    ctx.clearRect(0, 0, 960, 540);

    ctx.fillStyle = "#222";
    ctx.fillRect(-cameraX, MAP.groundY, MAP.width, 60);

    let spr = player.forma;
    if (player.supremo && spr === "fogo") spr = "fogoSupremo";

    drawSprite(
        ctx,
        player.x - cameraX,
        player.y,
        8,
        SPRITES[spr].idle,
        SPRITES[spr].colors
    );

    enemies.forEach(e => {
        ctx.fillStyle = "#a00";
        ctx.fillRect(e.x - cameraX, e.y, 32, 32);
    });
}
