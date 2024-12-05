let teampkmImg = document.querySelectorAll('.teampkm');
let favoriteName = document.querySelectorAll('.favoriteName');
let favoriteImg = document.querySelectorAll('.favoriteImg');



getPokemonTeams();
getPokemonFavorites();

async function getPokemonTeams(){
    let response = "";

    //team 1
    response = await fetch("https://pokeapi.co/api/v2/pokemon/decidueye-hisui");
    let decidueye = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/ursaluna");
    let Ursaluna = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/basculegion-female");
    let basculegion = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/zoroark-hisui");
    let zoroark = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/arcanine-hisui");
    let arcanine = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/braviary-hisui");
    let braviary = await response.json();

    //team 2
    response = await fetch("https://pokeapi.co/api/v2/pokemon/skeledirge");
    let skeledirge = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/tinkaton");
    let tinkaton = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/ursaluna-bloodmoon");
    let ursaluna_bloodmoon = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/ceruledge");
    let ceruledge = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/pawmot");
    let pawmot = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/roaring-moon");
    let roaring_moon = await response.json();

    //team 3
    response = await fetch("https://pokeapi.co/api/v2/pokemon/greninja");
    let greninja = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/aegislash-shield");
    let aegislash = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/tyranitar");
    let tyranitar = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/chandelure");
    let chandelure = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/gardevoir");
    let gardevoir = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/aurorus");
    let aurorus = await response.json();

    for(let x = 0; x < teampkmImg.length; x++){
        teampkmImg[x].src = decidueye.sprites.front_default;
    }

    teampkmImg[0].src = decidueye.sprites.front_default;
    teampkmImg[1].src = Ursaluna.sprites.front_default;
    teampkmImg[2].src = basculegion.sprites.front_default;
    teampkmImg[3].src = zoroark.sprites.front_shiny;
    teampkmImg[4].src = arcanine.sprites.front_default;
    teampkmImg[5].src = braviary.sprites.front_default;

    teampkmImg[6].src = skeledirge.sprites.front_default;
    teampkmImg[7].src = tinkaton.sprites.front_shiny;
    teampkmImg[8].src = ceruledge.sprites.front_default;
    teampkmImg[9].src = ursaluna_bloodmoon.sprites.front_default;
    teampkmImg[10].src = roaring_moon.sprites.front_default;
    teampkmImg[11].src = pawmot.sprites.front_default;

    teampkmImg[12].src = greninja.sprites.front_default;
    teampkmImg[13].src = aegislash.sprites.front_default;
    teampkmImg[14].src = gardevoir.sprites.front_shiny;
    teampkmImg[15].src = tyranitar.sprites.front_default;
    teampkmImg[16].src = chandelure.sprites.front_default;
    teampkmImg[17].src = aurorus.sprites.front_default;
    
}

async function getPokemonFavorites() {
    let response = "";

    response = await fetch("https://pokeapi.co/api/v2/pokemon/tinkaton");
    let tinkaton = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/decidueye");
    let decidueye = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/ursaluna-bloodmoon");
    let ursaluna_bloodmoon = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/roaring-moon");
    let roaring_moon = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/gardevoir");
    let gardevoir = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/aegislash-shield");
    let aegislash = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/metagross");
    let metagross = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/swampert");
    let swampert = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/chandelure");
    let chandelure = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/toxapex");
    let toxapex = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/corviknight");
    let corviknight = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/rayquaza");
    let rayquaza = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/snom");
    let snom = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/yveltal");
    let yveltal = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/aurorus");
    let aurorus = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
    let eevee = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/joltik");
    let joltik = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/mareep");
    let mareep = await response.json();
    response = await fetch("https://pokeapi.co/api/v2/pokemon/iron-valiant");
    let iron_valiant = await response.json();

    for(let x = 0; x < favoriteImg.length; x++){
        favoriteImg[x].src = tinkaton.sprites.front_default;
        favoriteName[x].textContent = tinkaton.name;
    }

    favoriteImg[0].src = decidueye.sprites.front_shiny;
    favoriteName[0].textContent = decidueye.name;
    favoriteImg[1].src = tinkaton.sprites.front_shiny;
    favoriteName[1].textContent = tinkaton.name;
    favoriteImg[2].src = metagross.sprites.front_shiny;
    favoriteName[2].textContent = metagross.name;
    favoriteImg[3].src = gardevoir.sprites.front_shiny;
    favoriteName[3].textContent = gardevoir.name;
    favoriteImg[4].src = swampert.sprites.front_default;
    favoriteName[4].textContent = swampert.name;
    favoriteImg[5].src = aegislash.sprites.front_default;
    favoriteName[5].textContent = aegislash.name;
    favoriteImg[6].src = chandelure.sprites.front_default;
    favoriteName[6].textContent = chandelure.name;
    favoriteImg[7].src = toxapex.sprites.front_default;
    favoriteName[7].textContent = toxapex.name;
    favoriteImg[8].src = corviknight.sprites.front_default;
    favoriteName[8].textContent = corviknight.name;
    favoriteImg[9].src = rayquaza.sprites.front_default;
    favoriteName[9].textContent = rayquaza.name;
    favoriteImg[10].src = snom.sprites.front_default;
    favoriteName[10].textContent = snom.name;
    favoriteImg[11].src = yveltal.sprites.front_default;
    favoriteName[11].textContent =  yveltal.name;
    favoriteImg[12].src = ursaluna_bloodmoon.sprites.front_default;
    favoriteName[12].textContent = ursaluna_bloodmoon.name;
    favoriteImg[13].src = aurorus.sprites.front_default;
    favoriteName[13].textContent = aurorus.name;
    favoriteImg[14].src = eevee.sprites.front_default;
    favoriteName[14].textContent = eevee.name;
    favoriteImg[15].src = joltik.sprites.front_default;
    favoriteName[15].textContent = joltik.name;
    favoriteImg[16].src = mareep.sprites.front_default;
    favoriteName[16].textContent = mareep.name;
    favoriteImg[17].src = iron_valiant.sprites.front_default;
    favoriteName[17].textContent = iron_valiant.name;


}