const player = {
    x: 100,
    y: 380,
    dx: 0,
    dy: 0,
    w: 32,
    h: 48,
    vida: 100,
    energia: 100,
    forma: "ben",
    supremo: false,
    noChao: false
};

function updatePlayer(keys) {
    player.dx = 0;
    if (keys["arrowright"]) player.dx = 4;
    if (keys["arrowleft"]) player.dx = -4;

    if (keys["arrowup"] && player.noChao) {
        player.dy = -15;
        player.noChao = false;
    }

    player.dy += 0.8;
    player.x += player.dx;
    player.y += player.dy;

    if (player.y + player.h >= MAP.groundY) {
        player.y = MAP.groundY - player.h;
        player.dy = 0;
        player.noChao = true;
    }

    if (player.supremo) {
        player.energia -= 0.2;
        if (player.energia <= 0) {
            player.supremo = false;
        }
    }
}
