



// exercice  crée un objet littetal

class Pokemon {
    constructor(nom, type, hp, attaque, defense, image){
        this.nom = nom;
        this.type = type;
        this.hp = hp;
        this.attaque = attaque;
        this.defense = defense;
        this.image = image;
    }
}

let bulbi = new Pokemon("bulbasaur", "seed", 90, 20, 20, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png");
let iron = new Pokemon("iron", "paradox", 100, 50, 30, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1010.png");
let walking = new Pokemon("walking", "paradox", 80, 40, 30, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1009.png");
let salameche = new Pokemon("salameche", "lizard", 70, 40, 40, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png");

let tableau = [bulbi, iron, walking, salameche];

for (var i = 0;i < tableau.length; i++) {
    affichage(tableau[i]);
}

tableau.forEach((pokemon) => {
    affichage(pokemon);
})

for(let pokemon in tableau){
    affichage(tableau[pokemon]);
}

let persone = {
  nom: "Pikachu",
  type: "eclair",
  hp: 100,
  attaque: 30,
  defense: 20,
  image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"
};


 function affichage(persone) {
    let picture = document.createElement("img");
    picture.src = persone.image;
    let name = document.createElement("h1");
    name.textContent = persone.nom;
    let type = document.createElement("h2");
    type.textContent = persone.type;
    let hp = document.createElement("h3");
    hp.textContent = persone.hp;
    let attaque = document.createElement("p");
    attaque.textContent = persone.attaque;
    let defense = document.createElement("p");
    defense.textContent = persone.defense;


    document.body.appendChild(picture);
    document.body.appendChild(name);
    document.body.appendChild(type);
    document.body.appendChild(hp);
    document.body.appendChild(attaque);
    document.body.appendChild(defense);

}

affichage(persone);




