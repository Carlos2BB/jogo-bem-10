const player = {
    x: 100,
    y: 300,
    dx: 0,
    dy: 0,
    vida: 100,
    energia: 100,
    forma: "ben",
    supremo: false,
    noChao: false
};

let attackCooldown = 0;

function updatePlayer(keys) {
    player.dx = 0;

    if (keys["arrowright"]) player.dx = 4;
    if (keys["arrowleft"]) player.dx = -4;

    if (keys["arrowup"] && player.noChao) {
        player.dy = -16;
        player.noChao = false;
    }

    if (keys["x"]) {
        player.forma = player.forma === "ben" ? "fogo" : "ben";
        player.supremo = false;
        keys["x"] = false;
    }

    if (keys["c"] && player.forma !== "ben") {
        player.supremo = !player.supremo;
        keys["c"] = false;
    }

    if (keys["z"] && attackCooldown <= 0 && player.forma === "fogo") {
        spawnProjectile(player.x + 64, player.y + 32, 1, "fogo");
        attackCooldown = 20;
    }

    attackCooldown--;

    player.dy += 0.9;
    player.x += player.dx;
    player.y += player.dy;

    if (player.y + 64 >= MAP.ground) {
        player.y = MAP.ground - 64;
        player.dy = 0;
        player.noChao = true;
    }

    if (player.supremo) {
        player.energia -= 0.3;
        if (player.energia <= 0) player.supremo = false;
    }
}
