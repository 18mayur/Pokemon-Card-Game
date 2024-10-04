const btn = document.querySelector("button");
const firstCard = document.querySelector(".first-card");
const url = "https://pokeapi.co/api/v2/pokemon/";
const secondCard = document.querySelector(".second-card");

let pokemonData = () => {
  let id = Math.floor(Math.random() * 150) + 3;
  let id2 = Math.floor(Math.random() * 150) + 2;
  const finalUrl1 = url + id;
  const finalUrl2 = url + id2;
  fetch(finalUrl1)
    .then((res) => res.json())
    .then((data) => {
      genrateCard1(data);
      console.log(data);
    });
  fetch(finalUrl2)
    .then((res) => res.json())
    .then((data2) => {
      genrateCard2(data2);
      console.log(data2);
    });
};

let genrateCard1 = (data) => {
  const hp = data.stats[0].base_stat;
  console.log(hp);
  const imgSrc = data.sprites.other.dream_world.front_default;
  console.log(imgSrc);
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefence = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  firstCard.innerHTML = `
                <p class="hp"><span><b>HP</b></span> ${hp}</p>
                <div class="card-content d-flex-col">
                    <div class="pokemon-img">
                        <img src=${imgSrc}>
                    </div>
                    <div>
                        <h3 class="poke-name">${pokeName}</h3>
                    </div>
                    <div class="type">
                        <span>type 1</span>
                    </div>
                    <div class="stats ">
                        <div class="attack">
                            <h5>${statAttack}</h5>
                            <p>Attack</p>
                        </div>
                        <div class="attack">
                            <h5>${statDefence}</h5>
                            <p>Defence</p>
                        </div>
                        <div class="attack">
                            <h5>${statSpeed}</h5>
                            <p>Speed</p>
                        </div>
                    </div>
            </div>`;
};
let genrateCard2 = (data) => {
  const hp = data.stats[0].base_stat;
  console.log(hp);
  const imgSrc = data.sprites.other.dream_world.front_default;
  console.log(imgSrc);
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefence = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  secondCard.innerHTML = `<p class="hp"><span><b>HP</b></span> ${hp}</p>
                <div class="card-content d-flex-col">
                    <div class="pokemon-img">
                        <img src=${imgSrc}>
                    </div>
                    <div>
                        <h3 class="poke-name">${pokeName}</h3>
                    </div>
                    <div class="type">
                        <span>type 1</span>
                    </div>
                    <div class="stats ">
                        <div class="attack">
                            <h5>${statAttack}</h5>
                            <p>Attack</p>
                        </div>
                        <div class="attack">
                            <h5>${statDefence}</h5>
                            <p>Defence</p>
                        </div>
                        <div class="attack">
                            <h5>${statSpeed}</h5>
                            <p>Speed</p>
                        </div>
                    </div>
            </div>`;
};
btn.addEventListener("click", pokemonData);
// window.addEventListener("load", pokemonData);
