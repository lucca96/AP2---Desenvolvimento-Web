function getPlayerFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const playerData = urlParams.get('player');
    const player = JSON.parse(decodeURIComponent(playerData));
    return player;
}

function displayPlayerDetails(player) {
    const playerDetailsContainer = document.getElementById('player-details');
    playerDetailsContainer.innerHTML = '';

    const playerCard = createPlayerCard(player);
    playerDetailsContainer.appendChild(playerCard);
}

const player = getPlayerFromURL();
if (player) {
    displayPlayerDetails(player);
} else {
    window.location.href = 'index.html';
}
