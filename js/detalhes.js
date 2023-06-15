function createPlayerCard(player) {
    const playerCardDetails = document.createElement('div');
    playerCardDetails.classList.add('player-details');
  
    const playerImage = document.createElement('img');
    playerImage.src = player.imagem;
    playerCardDetails.appendChild(playerImage);
  
    const playerName = document.createElement('h3');
    playerName.textContent = player.nome_completo;
    playerCardDetails.appendChild(playerName);

    const playerAltura = document.createElement('p');
    playerAltura.textContent = `Altura: ${player.altura}`;
    playerCardDetails.appendChild(playerAltura);

    const playerNasc = document.createElement('p');
    playerNasc.textContent = `Nascimento: ${player.nascimento}`;
    playerCardDetails.appendChild(playerNasc);
  
    const playerPosition = document.createElement('p');
    playerPosition.textContent = `Posição: ${player.posicao}`;
    playerCardDetails.appendChild(playerPosition);

    const playerDescription = document.createElement('p');
    playerDescription.textContent = `Descrição: ${player.descricao}`;
    playerCardDetails.appendChild(playerDescription);
  
    return playerCardDetails;
  }
  
  function displayPlayerDetails() {
    const playerDetailsContainer = document.getElementById('player-details');
    playerDetailsContainer.innerHTML = '';
  
    const player = JSON.parse(localStorage.getItem('selectedPlayer'));
  
    if (player) {
      const playerCardDetails = createPlayerCard(player);
      playerDetailsContainer.appendChild(playerCardDetails);
    } else {
      window.location.href = 'index.html';
    }
  }
  
  displayPlayerDetails();
  
  const backButton = document.getElementById('btn-voltar');
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  