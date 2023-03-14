const characterList = document.getElementById('character-list');

fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
      const characterCard = document.createElement('div');
      characterCard.classList.add('character-card');

      const characterName = document.createElement('h2');
      characterName.innerText = character.name;

      const characterImage = document.createElement('img');
      const characterImageNumber = character.url.match(/\/([0-9]*)\/$/)[1];
      characterImage.src = `https://starwars-visualguide.com/assets/img/characters/${characterImageNumber}.jpg`;

      const characterDetails = document.createElement('div');
      const characterBirthYear = document.createElement('p');
      characterBirthYear.innerHTML = `<strong>Birth Year:</strong> ${character.birth_year}`;
      const characterGender = document.createElement('p');
      characterGender.innerHTML = `<strong>Gender:</strong> ${character.gender}`;
      const characterHeight = document.createElement('p');
      characterHeight.innerHTML = `<strong>Height:</strong> ${character.height} cm`;
      const characterMass = document.createElement('p');
      characterMass.innerHTML = `<strong>Mass:</strong> ${character.mass} kg`;
      const characterEyeColor = document.createElement('p');
      characterEyeColor.innerHTML = `<strong>Eye Color:</strong> ${character.eye_color}`;
      const characterHairColor = document.createElement('p');
      characterHairColor.innerHTML = `<strong>Hair Color:</strong> ${character.hair_color}`;
      characterDetails.appendChild(characterBirthYear);
      characterDetails.appendChild(characterGender);
      characterDetails.appendChild(characterHeight);
      characterDetails.appendChild(characterMass);
      characterDetails.appendChild(characterEyeColor);
      characterDetails.appendChild(characterHairColor);

      characterCard.appendChild(characterName);
      characterCard.appendChild(characterImage);
      characterCard.appendChild(characterDetails);

      characterList.appendChild(characterCard);
    });
  })
  .catch(error => console.error(error));
