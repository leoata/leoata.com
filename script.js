window.onload = function () {
    anime({
        targets: ".oblique p",
        translateY: function (element, index, _) {
            return index + 0.5;
        },
        translateX: function (element, index, _) {
            return index + 0.5;
        },
        easing: 'spring(1, 80, 900, 0)',
        delay: anime.stagger(50)
    })
}

initial_top_nums = [];

window.onscroll = function (e) {
    // for every 10px scrolled down on page, set trinkets position 5px up. trinkets is a class parenting a bunch of images
    // however, trinkets children start with their own position so do it relative to that
    let trinkets = document.getElementsByClassName("trinkets").item(0).children;
    for (let i = 0; i < trinkets.length; i++) {
        if (initial_top_nums.length < trinkets.length) {
            initial_top_nums.push(parseInt(trinkets.item(i).style.top.substring(0, trinkets.item(i).style.top.length - 2)));
        }
        let initial_top_num = initial_top_nums[i];
        console.log(initial_top_num)
        let currentScrollY = document.documentElement.scrollTop;
        console.log(currentScrollY)
        trinkets.item(i).style.top = (currentScrollY*1/2)+initial_top_num + "px";
    }


}
