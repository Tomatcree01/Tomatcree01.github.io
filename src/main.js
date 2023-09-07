import {Howl} from "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js";
// import {}


console.log("Works best on Firefox");
    document.addEventListener("DOMContentLoaded", function () {
        var l = new Howl({
                src: ["/assets/click.mp3"],
                volume: .6
            }),
            d = document.getElementById("clipboard-notification"),
            E = document.querySelector(".social.discord");
        E.addEventListener("click", function () {
            var n = "kallosus16(2)#6138";
            navigator.clipboard.writeText(n).then(function () {
                d.style.display = "block", setTimeout(function () {
                    d.style.animation = "notification-fade-out 0.5s ease-in-out forwards"
                }, 5e3)
            }).catch(console.error), l.play()
        }), new Howl({
            src: ["/assets/sound.mp3"],
            loop: !0,
            volume: .1,
            autoplay: !0,
            autoplayOn: [15e3, 9e4]
        });
        var O = document.querySelector(".clock");

        function r() {
            var n = new Date,
                x = n.getHours(),
                g = n.getMinutes(),
                C = n.getSeconds();
            x = x > 12 ? x - 12 : x, g = g < 10 ? "0" + g : g, C = C < 10 ? "0" + C : C, O.innerHTML = x + ":" + g + ":" + C
        }
        setInterval(r, 1)
    });