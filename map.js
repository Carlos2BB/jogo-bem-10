const MAP = {
    width: 3000,
    groundY: 480
};

let cameraX = 0;

function updateCamera(player) {
    cameraX = player.x - 200;
    if (cameraX < 0) cameraX = 0;
    if (cameraX > MAP.width - 960)
        cameraX = MAP.width - 960;
}
