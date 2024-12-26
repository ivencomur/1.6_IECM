// There were several challenges to overcome. One of them, if not the most difficult, was learning that
//I needed to change the order of calls, functions, and methods, like the comparison logic, now placed
// at the end, so that the console would´t show me frequent errors.

let pokemonRepository = (function() {
     
    let pokemonList = [
        {name: "Articuno", height: 1.7, types: ["Ice", "Flying."], imgFile: "img/articuno.svg"},
        {name: "Charizard", height: 1.7, types: ["Fire", " Flying."], imgFile: "img/charizard.svg"},
        {name: "Butterfree", height: 1.1, types: ["Bug", " Flying."], imgFile: "img/butterfree.svg"},
        {name: "Pidgeot", height: 1.5, types: ["Flying", " Normal."], imgFile: "img/pidgeot.svg"}
    ];

    // To get all Pokémons:
    function getAll() {
        return pokemonList;
    }

    // To add a new Pokémon:
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // To show every Pokémon´s details when clicking on its name:
    function showDetails(pokemon) {
        console.log('Pokemon details:', pokemon);        
    }

    // Event listener added into the button:
    function addButtonEvent(button, pokemon) {
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    // To add a Pokémon (Pikachu) to the list with its corresponding button:
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        
       // Button properties to be utilized in the CSS:
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button");
        
        // To append elements as requested:
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        
       // Separate event listener for buttons:
        addButtonEvent(button, pokemon);
    }

    // FUnctions to be returned so far:
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        // Extra information required:
        showDetails: showDetails
    };
})();


let maxheight = 1.69;
let averageheight = 1.5;
let shortheight = 1.2;

// To include Pikachu into the repository:
pokemonRepository.add({
    name: "Pikachu",
    height: 1.04,
    types: ["Electric, Mouse."],
    imgFile: "img/pikachu.svg"
});


pokemonRepository.getAll().forEach(pokemon => {
    pokemonRepository.addListItem(pokemon);
    
    // Previous height comparison requirements (with some extra language):
    if (pokemon.height > maxheight) {
        let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} Wow, that Pokémon is tall!</p>`;
        let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="200"/>`;
        document.write(interpolatedText);
        document.write(pokemonImage);
    } else if (pokemon.height >= averageheight) {
        let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} And that is a regular Pokémon! </p>`;
        let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="150"/>`;
        document.write(interpolatedText);
        document.write(pokemonImage);
    } else if (pokemon.height <= shortheight) {
        let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} Wow, that is a short Pokémon!</p>`;
        let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="110"/>`;
        document.write(interpolatedText);
        document.write(pokemonImage);
    }
});