fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
