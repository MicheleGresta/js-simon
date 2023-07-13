const countdownElement = document.querySelector(".countdown");

const countdown = () => {
    const countDate = new Date("July 14, 2023 18:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;


    // trasformo i millesimi nelle varie ore minuti secondi

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // dalla rimanenza del tempo (diff) prendo il resto e lo divido in ore, poi il resto delle ore in minuti e cosi via

    const textDay = Math.floor(diff / day);
    const textHour = Math.floor((diff % day) / hour);
    const textMinute = Math.floor((diff % hour) / minute);
    const textSecond = Math.floor((diff % minute) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;


    if (diff < 1) {
        countdownElement.classList.add("display-none");
    }
}

setInterval(countdown, 1000);


