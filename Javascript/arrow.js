'use strict';
function Arrow () {
    this.x = 0;
    this.y = 0;
    this.color = "#ffff00";
    this.rotation = 0;
}

Arrow.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);

    context.save();

    context.rotate(this.rotation);
    context.lineWidth = 2;
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(-50, -25);
    context.lineTo(0, -25);
    context.lineTo(0, -50);
    context.lineTo(50, 0);
    context.lineTo(0, 50);
    context.lineTo(0, 25);
    context.lineTo(-50, 25);
    context.lineTo(-50, -25);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();

    context.fillStyle = '#000';
    context.beginPath();
    context.arc(0, 0, 3, 0, (Math.PI * 2), true);
    context.closePath();
    context.fill();
    context.restore();
    context.restore();
}