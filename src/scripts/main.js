var birthday = new Date("2024-10-20T00:00:00");

// Atualizar a contagem regressiva a cada segundo
var countdown = setInterval(function() {

    // Obter a data e hora atual
    var now = new Date().getTime();

    // Calcular a diferença entre a data do aniversário e a data atual
    var difference = birthday - now;

    // Converter a diferença em dias, horas, minutos e segundos
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Exibir a contagem regressiva nos elementos HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Se a contagem regressiva terminar, exibir uma mensagem
    if (difference < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "A festa começou!";
    }
}, 1000);
