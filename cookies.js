// cookies.js

// Fonction pour créer un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Fonction pour lire un cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

// Fonction pour accepter les cookies
function acceptCookies() {
    setCookie("cookiesAccepted", "true", 365);
    document.getElementById("cookie-banner").style.display = "none";
}

// Vérification des cookies à l'ouverture de la page
window.onload = function() {
    if (getCookie("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "none";
    }
};
