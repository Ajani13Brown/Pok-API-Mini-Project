const getPokéData = async (pokémon) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokémon}`);
    const data = await res.json();
    return data
};

console.log(getPokéData(1))



const pokédex = document.getElementById("pokédex")

const display = document.getElementById("display")


const handleSubmit = async (event)=>{
    event.preventDefault();
    const pokémon = event.target.pokémon.value;
    const result = await getPokéData(pokémon);
    const pokéCard = document.createElement('div');

    const name = result['name'];
    const id = result.id;
    const img = result.sprites.front_default;
    const abilities = result.abilities[0].ability.name;
    const type = result.types[0].type.name
    const stats = result.base_experience

    pokéCard.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="${img}" class="card-img-top" alt="${name}">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Id: ${id}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Type: ${type}</li>
    <li class="list-group-item">Ability: ${abilities}</li>
    <li class="list-group-item">Base stats: ${stats}</li>
  </ul>
</div>`
display.appendChild(pokéCard)
}
   

pokédex.addEventListener('submit',handleSubmit)

