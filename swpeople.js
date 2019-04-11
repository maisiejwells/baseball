
import { people } from './starwars/people.js'
import { planets } from './starwars/planets.js'

class Star {
    constructor(name) {
        this.id = 0,
        this.name = name
    }
}

// let newStar = new Star ('Lightsaber')
// console.log(newStar)

// const module = document.querySelector('.container')

// function createStarWarsCard(starData) {
// console.log(starData.id)
// let card = document.createElement('div')
// card.className = 'box'
// let figure = document.createElement('figure')
// let caption = document.createElement('figcaption')
// let image = document.createElement('img')


// let upperName= starData.name.charAt(0).toUpperCase() + starData.name.slice(1)
// caption.textContent = upperName
// if(starData.id !== 0) {
// image.src = `../images/${starData.id}${upperName}.png`
// } else {
// image.src = `../images/lightsaber.jpg`
// }

// // image.src = starData.sprites.front_shiny
// figure.appendChild(image)
// figure.appendChild(caption)
// card.appendChild(figure)
// mainContainer.appendChild(card)
// }

// star.forEach(singleStar => {
// fetch(sinlgeStar.url)
// .then(function(response) {
// return response.wars ()
// })
// .then(function(wars) {
// createStarWarsCard(wars)
// })
// })

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

const allHomeWorlds = people.map(person => {
    //console.log(getLastNumber(person.url))
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })
    let imageURL = getLastNumber(person.url)
    return {
        name: person.name,
        home: foundWorld.name,
        birth_year: person.birth_year,
        imagePath:`https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
        imagePlanets:`https://starwars-visualguide.com/#/planets/${imageURL}`
    }
})

console.log(allHomeWorlds)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {
// console.log("test")
    //card container
    let cardContainer = document.createElement('div')
    cardContainer.className = "card"
    cardContainer.addEventListener('click', function() {
        console.log('click')
        cardContainer.classList.toggle('is-flipped');
    })


    //back of card
    let cardBack = document.createElement('div')
    cardBack.className = "card__face card__face--back"

    //front of card
    let personElement = document.createElement('div')
    personElement.className = "card__face card__face--front"

    let planetElement = document.createElement('p')
    planetElement.className = "planetName"
    let birthYear = document.createElement('p')
    let imageElement = document.createElement('img')

    let imagePlanet = document.createElement('img')

    personElement.textContent = person.name
    planetElement.textContent = person.home
    birthYear.textContent = person.birth_year
    imageElement.src = person.imagePath

    imagePlanet.src = person.imagePlanet

    mainContainer.appendChild(cardContainer)
    cardContainer.appendChild(personElement)
    cardContainer.appendChild(cardBack)


    personElement.appendChild(planetElement)
    personElement.appendChild(birthYear)
    personElement.appendChild(imageElement)
    // mainContainer.appendChild(personElement)

    personElement.appendChild(planetElement)
    // personElement.appendChild(imagePlanet)


    document.body.appendChild(mainContainer)

})

let SwCard = document.querySelector('.card');

SwCard.addEventListener( 'click', function() {
    console.log('click')
    SwCard.classList.toggle('is-flipped');
});
// let test3 = document.createElement('p')
// test3.textContent = "hello"
// let testThing = document.querySelector('.card')
// testThing.appendChild(test3)

const newStarWarsButton = document.querySelector('button')

newStarWarsButton.addEventListener('click', function() {
createStarWarsCard(newStar)
});


