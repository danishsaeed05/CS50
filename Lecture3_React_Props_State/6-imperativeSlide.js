const SLIDE = {
  title: 'React is Declarative',
  bullets: [
    'Imeritive vs Declaraive',
    "The browser APIs are't fun to work with",
    'React allows us to write what we want, and the library will take care of the DOM manipulation',
  ],
}

//This is to add a slide in imperative way(step by step)
function createSlide(slide) {
  const slideElement = document.createElement('div')

  //TODO: add to slide
  const title = document.createElement('h1')
  title.innerHTML = SLIDE.title
  slideElement.appendChild(title)

  //creating Bullets now
  const bullets = document.createElement('ul')
  slide.bullets.forEach(bullet => {
    const bulletElement = document.createElement('li')
    bulletElement.className = CLASSNAMES.bullet
    bulletElement.innerHTML = bullet
    bullets.appendChild(bulletElement)
  })
  slideElement.appendChild(bullets)

  return slideElement
}
