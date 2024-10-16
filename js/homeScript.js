function startGame() {
    var vid = document.getElementById("gameVid");
    if (vid) {
        vid.style.display = 'block'; // Display the image
    }
}

function endGame() {
    var vid = document.getElementById("gameVid");
    if (vid) {
        vid.style.display = 'none'; // Hide the image
    }
}

function showRankings() {
    var table = document.getElementById('rankingsTable');
    if (table) {
        table.style.display = 'block'; // Display the table
    }
}

function hideRankings() {
    var table = document.getElementById('rankingsTable');
    if (table) {
        table.style.display = 'none'; // Hide the table
    }
}
var audio = document.getElementById("gameAudio");

    function toggleMute() {
        if (audio.muted) {
            audio.muted = false;
            document.getElementById("muteButton").textContent = "Mute";
        } else {
            audio.muted = true;
            document.getElementById("muteButton").textContent = "Unmute";
        }
    }