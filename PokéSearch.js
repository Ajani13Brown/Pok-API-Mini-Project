
const getPokéData = async (pokémon) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokémon}`);
    const data = await res.json();
    return data
};




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

    pokéCard.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="${img}" class="card-img-top" alt="${name}">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Id: ${id}</h6>
  </div>
</div>`
display.appendChild(pokéCard)
}
   

pokédex.addEventListener('submit',handleSubmit)

