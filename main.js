import { films } from './starwars/films.js'


const intro = document.querySelector('.starwars')

films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )

films.forEach(film => {
  let tile = document.createElement('div')
tile.className = "tile"
  let titleElement = document.createElement('h1')
  tile.appendChild(titleElement)
  titleElement.textContent = film.title


  let crawlElement = document.createElement('div')
  crawlElement.className = "crawl"
  tile.appendChild(crawlElement)
  crawlElement.textContent = film.opening_crawl

  intro.appendChild(tile)
})
