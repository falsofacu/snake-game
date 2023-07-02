const drawGUI = (level, points) => {
    ctx.font = "25px PovetSans";
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.fillText(`Level: ${level}`, 20, 30);
    ctx.strokeText(`Level: ${level}`, 20, 30);
    ctx.fillText(`Points: ${points}`, 550, 30);
    ctx.strokeText(`Points: ${points}`, 550, 30);
    //Restore prev, sorry for this
    ctx.lineWidth = 3;
}