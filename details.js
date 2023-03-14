const apiUrl = "https://swapi.dev/api/people/";
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get("id");

fetch(apiUrl + characterId)
  .then(response => response.json())
  .then(data => {
    const name = data.name;
    const height = data.height;
    const mass = data.mass;
    const hairColor = data.hair_color;
    const skinColor = data.skin_color;
    const eyeColor = data.eye_color;
    const birthYear = data.birth_year;
    const gender = data.gender;

    const characterName = document.getElementById("character-name");
    const characterHeight = document.getElementById("character-height");
    const characterMass = document.getElementById("character-mass");
    const characterHairColor = document.getElementById("character-hair-color");
    const characterSkinColor = document.getElementById("character-skin-color");
    const characterEyeColor = document.getElementById("character-eye-color");
    const characterBirthYear = document.getElementById("character-birth-year");
    const characterGender = document.getElementById("character-gender");

    characterName.textContent = name;
    characterHeight.textContent = height;
    characterMass.textContent = mass;
    characterHairColor.textContent = hairColor;
    characterSkinColor.textContent = skinColor;
    characterEyeColor.textContent = eyeColor;
    characterBirthYear.textContent = birthYear;
    characterGender.textContent = gender;
  })
  .catch(error => {
    console.error(error);
  });
