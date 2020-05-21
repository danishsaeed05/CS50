// assume createElement() exists, similar in abstraction to document.createElement()
//This is creating guitar in imperative manner

const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guitar() {
  // create head and add pegs
  const head = createElement('head')
  //adding pegs
  for(let i = 0; i < 6; i++)
  {
    const peg = createElement('peg')
    head.append(peg)
  }

  // create neck and add frets
  const neck = createElement('head')
  //adding frets
  for(let i = 0; i < 19; i++)
  {
    const fret = createElement('fret')
    neck.append(fret)
  }

  // create body and add strings
  const body = createElement('body')
  strings.forEach(tone => {
    const string = createElement('string')
    string.tune(tone)
    body.append(string)
  })

  return body
}
