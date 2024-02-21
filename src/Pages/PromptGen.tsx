import { useState } from "react"
import Button from 'react-bootstrap/Button'
import './promptgen.scss'

const PromptGen = () => {
  
const [promptRes, setPromptRes] = useState('')
const [b1, setB1] = useState('unclicked')

const [titleRes, setTitleRes] = useState<any>('')
const [b2, setB2] = useState('unclicked')

const [structureRes, setStructureRes] = useState<any>('')
const [b3, setB3] = useState('unclicked')

const [instRes, setInstRes] = useState<any>('')
const [b4, setB4] = useState('unclicked')

const [vocRes, setVocRes] = useState<any>('')
const [b5, setB5] = useState('unclicked')


//Things to keep in mind:
//Choose wisely what is and isn't open for interpretation. 
//Be very weary of overrepresenting something (eg. writing too many hip hop producers as inspo), this can skew your output in a direction

// The song prompt, should be the start of a story or the point the song is trying to make
const prompt = [
  'A song about two lovers, one anxiously attached, one avoidantly attached. Told by one of the two (decided by a coin flip).',
  'A song about two opposites that repel each other even though they dont want to',
]

// The title, will be three random words, so just add whatever words you want for vibe. Pay close attention to them during writing.
const title = [
  'Mist ',
  'Cloud ',
  'Moon ',
  'Psycho ',
  'Killer ',
  'River ',
  'Hermes ',
]

// The structure decides the path the song will take during its course, or the dynamics of the environment
const structure = [
  'Follows a clear setup, conflict, resolution / lack of resolution',
  'Is told as memories are, without regard for chronology, and with all the elements out of proportion',
  'Starts off minimal but keeps building and building until the release',
  'Loud during the verses, but quiet during the chorus',
  'The closer you get to the character the more reverb there is. Objects and events can be characters, too.',
  'Every time the mood changes, so does the room.',
  'Simple pop structure: verses, hooks and bridge',
  'Simple pop structure: verses, hooks and bridge',

]

// Artists, producers and songs to take inspiration from during the production
const instArtist = [
  'Y2K Timbaland',
  '2000s Timbaland',
  'Neptunes',
  'A.G. Cook',
  'Alabama Shakes',
  'Mac Demarco - Chamber Of Reflection',
  'Beach House',
  'Ian Kirkpatrick',
]

// Modifiers for the preceding, comes after the word "but"
const instMod = [
  ' with Hyperpop influences',
  ' made with the bare minimum',
  ' with a crazy shuffle',
  ' made on a cheap cassette tape'
]

// Vocal artists and songs to take inpiration from during writing
const vocArtist = [
  'Imogen Heap',
  'Billie Eilish',
  'Tom Waits',
  'Snoh Aalegra',
  'Nico',
  'James Blake',
  'Frank Ocean',
  'Andy Shauf'
]

// Modifiers for the preceding, , comes after the word "but"
const vocMod = [
  ' with a vintage mic setup',
  ' with Blonde vocal chops',
]


const promptClick = () => {
  const rng = Math.floor(Math.random() * prompt.length)
  setPromptRes(prompt[rng])
  setB1('clicked')
}

const titleClick = () => {
  const rng = 2 + Math.floor(Math.random() * 2)
  
  let endTitle = []
  let num: number

  for (let i = 0; i < rng; i++) {
    num = Math.floor(Math.random() * title.length) 
    endTitle.push(title[num])
    title.splice(num, 1)
  }

  setTitleRes(endTitle)
  setB2('clicked')
}

const structureClick = () => {
  const rng = Math.floor(Math.random() * structure.length)
  setStructureRes(structure[rng])
  setB3('clicked')
}

const instClick = () => {
  const rng = Math.floor(Math.random() * instArtist.length)
  const rng2 = Math.floor(Math.random() * instMod.length)
  const rng3 = Math.random()
  if (rng3 < 0.2) {
    const result = instArtist[rng] + instMod[rng2]
    setInstRes(result)
  } else {
    setInstRes(instArtist[rng])
  }
  
  setB4('clicked')
}

const vocClick = () => {
  const rng = Math.floor(Math.random() * vocArtist.length)
  const rng2 = Math.floor(Math.random() * vocMod.length)
  const rng3 = Math.random()
  if (rng3 < 0.2) {
    const result = vocArtist[rng] + vocMod[rng2]
    setVocRes(result)
  } else {
    setVocRes(vocArtist[rng])
  }
  
  setB5('clicked')
}



  return (
    <main>
      <h2>
        Song prompt generator
      </h2>
      <br/><br/>
      

      <h5>Prompt</h5>
      <Button variant="primary" className={b1} onClick={() => promptClick()}>Generate</Button>
      <div>{promptRes}</div>
      <br/><br/>

      <h5>Title</h5>
      <Button variant="primary" className={b2} onClick={() => titleClick()}>Generate</Button>
      <div>{titleRes}</div>
      <br/><br/>

      <h5>Structure</h5>
      <Button variant="primary" className={b3} onClick={() => structureClick()}>Generate</Button>
      <div>{structureRes}</div>
      <br/><br/>

      <h5>Instrumental inspo</h5>
      <Button variant="primary" className={b4} onClick={() => instClick()}>Generate</Button>
      <div>{instRes}</div>
      <br/><br/>

      <h5>Vocal inspo</h5>
      <Button variant="primary" className={b5} onClick={() => vocClick()}>Generate</Button>
      <div>{vocRes}</div>
      <br/><br/>

      <div>
        Getting stuck while writing?? Try <a href="oblique">Obliques</a>
      </div>

    </main>




  )
}

export default PromptGen

//Ideas
// Can download as .txt?
// Add a coin to flip for parts that say coin flip
// Add the Oblique component at the bottom.
// Make everything optional in that it can be deleted