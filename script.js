// Functie om een tab-content te openen
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Verberg alle tab-content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Verwijder de "active" class van alle tab-link knoppen
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Toon de gevraagde tab-content en maak de geclickte knop "active"
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open bij het laden standaard de eerste tab
document.addEventListener("DOMContentLoaded", function() {
    var eerste = document.getElementsByClassName("tab-link")[0];
    if (eerste) {
        eerste.click();
    }
});
