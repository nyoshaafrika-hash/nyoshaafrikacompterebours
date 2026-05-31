// Définir la date cible (Format: Année, Mois (0-11), Jour, Heures, Minutes, Secondes)
// Attention : Le mois de juillet est le mois 6 (car janvier = 0)
const targetDate = new Date(2026, 6, 10, 0, 0, 0).getTime();

const countdownFunction = setInterval(() => {
    // Obtenir la date et l'heure actuelles
    const now = new Date().getTime();
    
    // Trouver la distance entre maintenant et la date cible
    const distance = targetDate - now;
    
    // Calculs de temps pour les jours, heures, minutes et secondes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Afficher le résultat dans les éléments correspondants
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    
    // Si le compte à rebours est terminé, afficher un texte
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-container").innerHTML = "<h1>C'est parti !</h1>";
    }
}, 1000);