const slides = [
  {
    title: 'React',
    bullets: [
      'Allows us to write declarative views that "react" to changes in data',
      'Allows us to abstract complex problems into smaller components',
      'Allows us to write simple code that is still performant',
    ],
  },
  {
    title: 'React is Declarative',
    bullets: [
      'Imerative vs Declarative',
      "The browser APIs aren't fun to work with",
      'React allows us to write what we want, and the library will take care of the DOM manipulation',
    ],
  },
  {
    title: 'React is Easily Componentized',
    bullets: [
      'Breaking a complex problem into discrete components',
      'Can reuse these components',
      "React's declarative nature makes it easy to customize components",
    ],
  },
]

// TODO implement slideshow
const slideShow = (
  <div>
    {/* Single curly backets mean execute in JS */}
    {slides.map(slide => <Slide slide={slide} />)}
  </div>
)

//Uppercase in JSX gets invoked like function
const Slide = slide => (
  <div>
    <h1>{slide.title}</h1>
      <ul>
        {slide.bullets.map(bullet => <li> {bullet} </li>)}
      </ul>
  </div>
)