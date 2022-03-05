function draw_grid(ctx, minor, major, stroke, fill) {
    minor = minor || 10;
    major = major || minor * 5;
    stroke = stroke || '#00FF00';
    fill = fill || '009900';

    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    let width = canvas.width, height = canvas.height;

    for (let x = 0; x < width; x += minor) {
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x, height);
        ctx.lineWidth = (x % major == 0) ? .5 : .25;
        ctx.stroke();
        if (x % major == 0) {ctx.fillText(x, x, 10);}
    }

    for (let y = 0; y < height; y += minor) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.lineWidth = (y % major == 0) ? .5 : .25;
        ctx.stroke();
        if (y % major == 0) {ctx.fillText(y, 0, y + 10);}
    }
    ctx.restore();
}

function draw_pacman(ctx, x,y,radius,openess) {
    ctx.save();
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 5;

    context.beginPath();
   
    if (openess == 1) {
         // fully open
        context.arc(x,y,radius,0.2*Math.PI, 1.8*Math.PI);
        context.lineTo(x,y);
    } else if (openess == 0) {
        // fully closed
        context.arc(x,y,radius,0, 2*Math.PI);
    } else {
        // somewhat open
        context.arc(
            x,y,radius,
            (openess*0.2)*Math.PI, 
            (2 - (openess*0.2))*Math.PI
        );
        context.lineTo(x,y);
    }

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}