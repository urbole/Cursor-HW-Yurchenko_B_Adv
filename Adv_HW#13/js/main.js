"use strict";

function getValueForGender(gender) {
  const genderKey = gender;
  const genderMap = {
    male: () => 'src="assets/img/male.svg"',
    female: () => 'src="assets/img/female.svg"',
    none: () => 'src="assets/img/android.svg"',
    hermaphrodite: () => 'src="assets/img/hermaphrodite.svg"',
    'n/a': () => 'src="assets/img/android.svg"',
  };
  return genderMap[genderKey]();
}

function getAvatar(name) {
  const avatarKey = name;
  const avatarMap = {
    "http://swapi.dev/api/people/1/":
      () => 'https://starwars.ru/media/cache/45/7f/457fcfa78067ddc009e5b4fff64dc215.png',
    "http://swapi.dev/api/people/2/":
      () => 'https://starwars.ru/media/cache/08/d8/08d85ccc597a78b6bc2e4a793627a842.png',
    "http://swapi.dev/api/people/3/":
      () => 'https://starwars.ru/media/cache/6d/84/6d848d8f479cef0384547ceda80cfcfd.png',
    "http://swapi.dev/api/people/4/":
      () => 'https://starwars.ru/media/cache/d4/22/d42298fdeb6888735a4a7f110836a9be.png',
    "http://swapi.dev/api/people/5/":
      () => 'https://starwars.ru/media/cache/e6/c3/e6c34a24c5ea97bad8a9bc76ef979240.png',
    "http://swapi.dev/api/people/6/":
      () => 'https://starwars.ru/media/cache/2e/a7/2ea77230b3f7310fe5e06a5dc4bc596b.png',
    "http://swapi.dev/api/people/7/":
      () => 'https://starwars.ru/media/cache/46/2d/462df6089f21c79ed87a5f81cb37972a.png',
    "http://swapi.dev/api/people/8/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/c/cb/R5-D4_Sideshow.png',
    "http://swapi.dev/api/people/9/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/2/20/Biggs.jpg',
    "http://swapi.dev/api/people/10/":
      () => 'https://starwars.ru/media/cache/81/12/81125c37f5a6bc1edbd76f16305e8924.png',
    "http://swapi.dev/api/people/11/":
      () => 'https://starwars.ru/media/cache/3b/0c/3b0c9be2ec5ccb401029f782a87101bd.png',
    "http://swapi.dev/api/people/12/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/c/c1/Tarkininfobox.jpg',
    "http://swapi.dev/api/people/13/":
      () => 'https://starwars.ru/media/cache/6a/4b/6a4bbd47b4f4ba1072b51e9421f1802f.png',
    "http://swapi.dev/api/people/14/":
      () => 'https://starwars.ru/media/cache/3e/de/3ede5d7619b4e8bd0348610deac8005b.png',
    "http://swapi.dev/api/people/15/":
      () => 'https://starwars.ru/media/cache/3f/2d/3f2dd5c9dc7432d57cdd0b3e156f00bc.png',
    "http://swapi.dev/api/people/16/":
      () => 'https://starwars.ru/media/cache/8e/c3/8ec3020e0940073798008e494f8535ae.png',
    "http://swapi.dev/api/people/18/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/6/60/WedgeHelmetless-ROTJHD.jpg',
    "http://swapi.dev/api/people/19/":
      () => 'https://static.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png',
    "http://swapi.dev/api/people/20/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/d/d6/Yoda_SWSB.png',
    "http://swapi.dev/api/people/21/":
      () => 'https://starwars.ru/media/cache/4a/e2/4ae21f84c4c3ec7182703701a1309799.png',
    "http://swapi.dev/api/people/22/":
      () => 'https://starwars.ru/media/cache/59/38/59384a6cb9f7c888a3619a6c4e8c74a3.png',
    "http://swapi.dev/api/people/23/":
      () => 'https://starwars.ru/media/cache/77/02/770252838ea0adac7179f59b6d76a69b.png',
    "http://swapi.dev/api/people/24/":
      () => 'https://starwars.ru/media/cache/9a/e2/9ae2179aa5423c67e1674ea8e3efae3e.png',
    "http://swapi.dev/api/people/25/":
      () => 'https://starwars.ru/media/cache/f7/50/f750df4d984ce169b8680ed9c7ed67a2.png',
    "http://swapi.dev/api/people/26/":
      () => 'https://starwars.ru/media/cache/9b/eb/9beb5efaeb15939f47bb65bcaebefe33.png',
    "http://swapi.dev/api/people/27/":
      () => 'https://starwars.ru/media/cache/0f/c7/0fc7e52f05405c21ecc220c97498e3a4.png',
    "http://swapi.dev/api/people/28/":
      () => 'https://starwars.ru/media/cache/48/e5/48e5e6195c206577df943d0ac730ba83.png',
    "http://swapi.dev/api/people/29/":
      () => 'https://www.personality-database.com/profile_images/35581.png',
    "http://swapi.dev/api/people/30/":
      () => 'https://starwars.ru/media/cache/03/4b/x034b158634104e45630f983e42092ba0.png.pagespeed.ic.OJ1aPtYI32.webp',
    "http://swapi.dev/api/people/31/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/1/14/Old_nien_nunb_-_profile.png',
    "http://swapi.dev/api/people/32/":
      () => 'https://starwars.ru/media/cache/c3/78/c378b7945a6fad35a0ebb37e9d78b97f.png',
    "http://swapi.dev/api/people/33/":
      () => 'https://starwars.ru/media/cache/aa/ef/aaeff238940172d6a36de76336db6b17.png',
    "http://swapi.dev/api/people/34/":
      () => 'https://starwars.ru/media/cache/06/e6/06e6937eda72c9a4da8cc26c8ae5574b.png',
    "http://swapi.dev/api/people/35/":
      () => 'https://starwars.ru/media/cache/f8/65/f865fe6189b3231c26c41d18b522ad7f.png',
    "http://swapi.dev/api/people/36/":
      () => 'https://starwars.ru/media/cache/9f/87/9f87c72d53b7fdfda38a42e2401e2d66.png',
    "http://swapi.dev/api/people/37/":
      () => 'https://starwars.ru/media/cache/bd/6e/bd6ec738969006b1737318ab898d612a.png',
    "http://swapi.dev/api/people/38/":
      () => 'https://starwars.ru/media/cache/78/1d/781d175011485c86c7ee259b6e07b5f9.png',
    "http://swapi.dev/api/people/39/":
      () => 'https://static.wikia.nocookie.net/swfanon/images/8/8a/RicOlie.jpg',
    "http://swapi.dev/api/people/40/":
      () => 'https://starwars.ru/media/cache/df/e6/dfe6b2f5a4724dcd3563607077d27f0b.png',
    "http://swapi.dev/api/people/41/":
      () => 'https://starwars.ru/media/cache/66/ad/66ad7952bea6e12a2acc9841d80bd956.png',
    "http://swapi.dev/api/people/42/":
      () => 'https://starwars.ru/media/cache/5c/2e/5c2e7a13266e188a8a0c690d8fa0421c.png',
    "http://swapi.dev/api/people/43/":
      () => 'https://starwars.ru/media/cache/4d/80/4d80683dcf6c5727aeda7cc30801a23c.png',
    "http://swapi.dev/api/people/44/":
      () => 'https://starwars.ru/media/cache/a1/71/a1717d6b5105ab81109e6cf76550c5f5.png',
    "http://swapi.dev/api/people/45/":
      () => 'https://starwars.ru/media/cache/e3/ce/e3ceddc3f91b40c8f99f6101b392b364.png',
    "http://swapi.dev/api/people/46/":
      () => 'https://starwars.ru/media/cache/23/b6/23b699c9955b7375295419ebdba1b201.png',
    "http://swapi.dev/api/people/47/":
      () => 'https://static.wikia.nocookie.net/starwars/images/6/68/RattsHS.jpg',
    "http://swapi.dev/api/people/48/":
      () => 'https://static.wikia.nocookie.net/starwars/images/b/b0/Dud_Bolt.jpg',
    "http://swapi.dev/api/people/49/":
      () => 'https://static.wikia.nocookie.net/starwars/images/5/57/GasganoHS-SWE.jpg',
    "http://swapi.dev/api/people/50/":
      () => 'https://static.wikia.nocookie.net/starwars/images/0/02/BenQuadinarosHS-SWE.png',
    "http://swapi.dev/api/people/51/":
      () => 'https://starwars.ru/media/cache/b5/60/b560eaa2b7caffde4ee03c7499217df7.png',
    "http://swapi.dev/api/people/52/":
      () => 'https://starwars.ru/media/cache/86/e8/86e8a49de1419cbbcecb970a5498036e.png',
    "http://swapi.dev/api/people/53/":
      () => 'https://starwars.ru/media/cache/9c/d1/9cd1e9155d6d50743ad3f61baf26c55c.png',
    "http://swapi.dev/api/people/54/":
      () => 'https://starwars.ru/media/cache/25/fc/25fcc1f349b0a80aa0c64f127b9feab5.png',
    "http://swapi.dev/api/people/55/":
      () => 'https://starwars.ru/media/cache/25/51/2551d796682188f980d2bd12d14fbec1.png',
    "http://swapi.dev/api/people/56/":
      () => 'https://static.wikia.nocookie.net/starwars/images/a/a3/SaeseeTiin-SWCT.png',
    "http://swapi.dev/api/people/57/":
      () => 'https://static.wikia.nocookie.net/starwars/images/b/b2/YaraelPoof-SWCT.png',
    "http://swapi.dev/api/people/58/":
      () => 'https://starwars.ru/media/cache/53/d0/53d065c1c93b0b10d055ba422921e3d4.png',
    "http://swapi.dev/api/people/59/":
      () => 'https://starwars.ru/media/cache/52/71/527129428929aac46bcb2c4f0f5c36cc.png',
    "http://swapi.dev/api/people/60/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/5/52/Gregar_Typho.jpg',
    "http://swapi.dev/api/people/61/":
      () => 'https://static.wikia.nocookie.net/starwars/images/d/de/Cord%C3%A9.jpg',
    "http://swapi.dev/api/people/62/":
      () => 'https://starwars.ru/media/cache/30/a6/30a678edc1a41ba6f24010661daf45b6.png',
    "http://swapi.dev/api/people/63/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png',
    "http://swapi.dev/api/people/64/":
      () => 'https://starwars.ru/media/cache/60/dc/60dcaf2d803b32b23028bb8ad4148d65.png',
    "http://swapi.dev/api/people/65/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/3/37/Barrisprofile2.jpg',
    "http://swapi.dev/api/people/66/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/8/8b/Dorme.jpg',
    "http://swapi.dev/api/people/67/":
      () => 'https://starwars.ru/media/cache/5b/b6/5bb684ee5efc4c01c1d8a82ac113d8ef.png',
    "http://swapi.dev/api/people/68/":
      () => 'https://starwars.ru/media/cache/0c/94/0c9438b25179fbcc5c953d5e070fc24b.png',
    "http://swapi.dev/api/people/69/":
      () => 'https://starwars.ru/media/cache/d0/a0/d0a01f31bd9dae1777319921d5b81ef9.png',
    "http://swapi.dev/api/people/70/":
      () => 'https://i.pinimg.com/564x/a2/37/d3/a237d396eb64bcda83d67912ba3fc3fb.jpg',
    "http://swapi.dev/api/people/71/":
      () => 'https://starwars.ru/media/cache/2f/5f/2f5fb4b67aadfdeb439e2d10db24501b.png',
    "http://swapi.dev/api/people/72/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/6/67/Caminoan3636.png',
    "http://swapi.dev/api/people/73/":
      () => 'https://static.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg',
    "http://swapi.dev/api/people/74/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/4/44/Jocasta_Nu.jpg',
    "http://swapi.dev/api/people/75/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/7/77/R4-G9.jpg',
    "http://swapi.dev/api/people/76/":
      () => 'https://static.wikia.nocookie.net/starwars/images/a/a5/Wat_Tambor.png',
    "http://swapi.dev/api/people/77/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/6/6f/SanHill_hs.jpg',
    "http://swapi.dev/api/people/78/":
      () => 'https://starwars.ru/media/cache/dc/52/dc52be418f1bea5dc4578719927c0339.png',
    "http://swapi.dev/api/people/79/":
      () => 'https://starwars.ru/media/cache/02/be/02bea7afd2d858ce29e710c4ed870335.png',
    "http://swapi.dev/api/people/80/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/3/37/Tarfful_RotS.png',
    "http://swapi.dev/api/people/81/":
      () => 'https://static.wikia.nocookie.net/banthapedia/images/6/61/RaymusAntilles.jpg',
    "http://swapi.dev/api/people/82/":
      () => 'https://static.wikia.nocookie.net/rustarwars/images/9/9e/SlyMoore.jpg',
    "http://swapi.dev/api/people/83/":
      () => 'https://starwars.ru/media/cache/cb/6a/cb6ae71ed3ce970720fa0da281dcfa3b.png'
  };
  return avatarMap[avatarKey]();
}

const getInfoCharactersOnEpisode = () => {
  document.getElementById('wrapper_for_cards').innerHTML = '';
  const optionIndex = document.getElementById("select_episode").selectedIndex;
  const optionValue = document.getElementsByTagName("option")[optionIndex].value;
  const wrapperCards = document.getElementById('wrapper_for_cards');

  fetch(`https://swapi.dev/api/films/${optionValue}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.characters.map((character) => {
        let transformUrl = '';
        transformUrl = character.replaceAll('http:', 'https:');

        fetch(transformUrl)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            wrapperCards.insertAdjacentHTML('beforeend', `
            <div class='card'>
              <span class='figcaption' id="char_name"><i>${data.name}</i></span>
              <img class='svg' src=${getAvatar(data.url)} alt="${data.name} photo">
              <span class='figcaption' id="char_gender"><img style="width: 1rem;" ${getValueForGender(data.gender)}></span>
              <span class='figcaption' id="char_birth">ДР : <i>${data.birth_year}</i></span>
            </div>`);
          });
      });
    });
};

document.getElementById('test_get_info').addEventListener('click', getInfoCharactersOnEpisode);

const wrapperBts = document.getElementById('get_planets');
wrapperBts.insertAdjacentHTML('afterend', `
<button class='btn prev_planets_list' id="prev_planets_list" disabled="disabled">
  Prev planets list
</button>
  `);
wrapperBts.insertAdjacentHTML('afterend', `
  <button class='btn next_planets_list' id="next_planets_list" disabled="disabled">
    Next planets list
  </button>
  `);

const getAllPlanets = () => {
  document.getElementById('get_planets').setAttribute("disabled", "disabled");
  document.getElementById('next_planets_list').removeAttribute("disabled");
  let url = 'https://swapi.dev/api/planets/?page=1';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.map((planet) => {
        document.getElementById('wrapper_for_planets').insertAdjacentHTML('beforeend', `
        <div class='card'>
          <img class='svg' src="assets/img/planet.svg" alt="">
          <span>${planet.name}</span>
        </div>`);
      });
    });

  const getNextListPlanets = () => {
    document.getElementById('wrapper_for_planets').innerHTML = '';
    document.getElementById('prev_planets_list').removeAttribute("disabled");

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('🚀 ~ data', data);
        if (data.next !== null) {
          url = data.next.replaceAll('http:', 'https:');
          fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              data.results.map((planet) => {
                const wrapperPlanets = document.getElementById('wrapper_for_planets');
                wrapperPlanets.insertAdjacentHTML('beforeend', `
                  <div class='card'>
                    <img class='svg' src="assets/img/planet.svg" alt="">
                    <span>${planet.name}</span>
                  </div>`);
              });
            });
        } else {
          document.getElementById('wrapper_for_planets').innerHTML = '';
          document.getElementById('next_planets_list').setAttribute("disabled", "disabled");
          window.location.reload();
        }
      });
  };

  document.getElementById('next_planets_list').addEventListener('click', getNextListPlanets);

  const getPrevListPlanets = () => {
    document.getElementById('wrapper_for_planets').innerHTML = '';
    document.getElementById('next_planets_list').removeAttribute("disabled");

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.previous !== null) {
          url = data.previous.replaceAll('http:', 'https:');
          fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              data.results.map((planet) => {
                const wrapperPlanets = document.getElementById('wrapper_for_planets');
                wrapperPlanets.insertAdjacentHTML('beforeend', `
                  <div class='card'>
                    <img class='svg' src="assets/img/planet.svg" alt="">
                    <span>${planet.name}</span>
                  </div>`);
              });
            });
        } else {
          document.getElementById('wrapper_for_planets').innerHTML = '';
          document.getElementById('prev_planets_list').setAttribute("disabled", "disabled");
          window.location.reload();
        }
      });
  };

  document.getElementById('prev_planets_list').addEventListener('click', getPrevListPlanets);
};

document.getElementById('get_planets').addEventListener('click', getAllPlanets);