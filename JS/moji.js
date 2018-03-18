(function () {
    var ball = document.getElementById("moji"),
        bh = ball.clientHeight,
        bw = ball.clientWidth,
        left = (window.innerWidth / 2) - (bw / 2),
        top = -ball.offsetHeight,
        ground = (window.innerHeight / 3) - (bh / 2);
    ball.style.left = left + "px";
    ball.style.top = top + "px";

    setTimeout(function () {
        var y = top,
            b = ground,
            v = 0,
            R = 0.55;

        function gravity() {
            y += ++v;
            if (y >= b) {
                y = b;
                v *= -R;
                if (!~~v) {
                    clearInterval(g)
                }
            }
            document.getElementById("moji").style.top = y + "px";
        }
        var g = setInterval(gravity, 18);
    }, 100);
}());