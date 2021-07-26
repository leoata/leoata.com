window.onload = function () {
    anime({
        targets: ".oblique p",
        translateY: function (element, index, _) {
            return index+0.5;
        },
        translateX: function (element, index, _) {
            return index+0.5;
        },
        easing: 'spring(1, 80, 900, 0)',
        delay: anime.stagger(50)
    })
}

