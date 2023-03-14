const apiUrl = "https://swapi.dev/api/people";
const container = document.getElementById("characters-container");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    characters.forEach(character => {
      const name = character.name;
      const characterName = document.createElement("p");
      characterName.textContent = name;
      container.appendChild(characterName);
    });
  })
  .catch(error => {
    console.error(error);
  });

