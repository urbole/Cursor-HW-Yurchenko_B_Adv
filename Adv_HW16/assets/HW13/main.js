"use strict";

document.getElementById('get_info').addEventListener('click', getInfo);
const btnGetChars = document.getElementById('get_info');
const btnRemoveChars = document.getElementById('hide_get_info');
const containerChars = document.createElement('section');

const removeInfo = () => containerChars.remove();
document.getElementById('hide_get_info').addEventListener('click', removeInfo);

document.getElementById('show_list_planets').addEventListener('click', getPlanetsOfEpisode);
const btnShowListPlanets = document.getElementById('show_list_planets');
const btnRemoveListPlanets = document.getElementById('hide_list_planets');
const containerListPlanets = document.createElement('section');

function getValueForGender(gender) {
  const genderKey = gender;
  const genderMap = {
    male: () => 'src="assets/img/male.svg"',
    female: () => 'src="assets/img/female.svg"',
    none: () => 'src="assets/img/android.svg"',
    'n/a': () => 'src="assets/img/android.svg"',
  };
  return genderMap[genderKey]();
}

function getInfo() {

  fetch('https://swapi.dev/api/films/2/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const charactersArr = data.characters;

      for (let i = 0; i < charactersArr.length; i++) {
        const character = charactersArr[i];

        fetch(character)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            btnRemoveChars.after(containerChars);
            const characterCard = document.createElement('figure');
            containerChars.prepend(characterCard);
            characterCard.innerHTML = `
            <img src="assets/img/avatar.svg" alt="${data.name} photo">
              <figcaption id="char_name">Имя персонажа:<br><i>${data.name}</i></figcaption>
              <figcaption id="char_birth">Дата рождения: <i>${data.birth_year}</i></figcaption>
              <figcaption id="char_gender">
              <img style="width: 1rem;" ${getValueForGender(data.gender)}>
              </figcaption>`;
          });
      }
    });
}


let linkEpisode = 'https://swapi.dev/api/films/1/';

function getPlanetsOfEpisode() {

  const wrapBtnNextList = document.createElement('div');
  btnRemoveListPlanets.after(wrapBtnNextList);
  wrapBtnNextList.innerHTML = `
  <button id="next_list_planets">Next episode</button>`;
  document.getElementById('next_list_planets').addEventListener('click', changeLink);


  document.getElementById('hide_list_planets').addEventListener('click', removeListPlanets);
  function removeListPlanets() {
    containerListPlanets.remove();
    wrapBtnNextList.remove();
    removePlanetsCard();
  }

  let count = 1;
  function changeLink() {
    removeListPlanets();
    count++;
    linkEpisode = `https://swapi.dev/api/films/${count}/`;
    return getPlanetsOfEpisode();
  }

  fetch(linkEpisode)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const newArr = data.planets;
      // let planetsArr = [];

      for (let i = 0; i < newArr.length; i++) {
        const planet = newArr[i];

        fetch(planet)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            btnRemoveListPlanets.after(containerListPlanets);
            const planetsCard = document.createElement('div');
            containerListPlanets.prepend(planetsCard);
            console.log('планета', i);
            planetsCard.innerHTML = `
          <img style="width: 4rem;" src="assets/img/planet.svg" alt="${data.name} photo">
          <p>${data.name}</p>`;

          function removePlanetsCard(){
            return planetsCard.remove();
          }
            // const removePlanetsCard = () => planetsCard.remove();
          });
      }
    });
}


