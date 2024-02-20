import { useState } from "react"
import Button from 'react-bootstrap/Button'
import './promptgen.scss'

const PromptGen = () => {
  
const [promptRes, setPromptRes] = useState('')
const [b1, setB1] = useState('unclicked')

const [titleRes, setTitleRes] = useState('')
const [b2, setB2] = useState('unclicked')

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
  'Mist',
  'Cloud',
  'Moon',
  'Psycho',
  'Killer',
  'River',
  'Hermes',
]

// The structure decides the path the song will take during its course, or the dynamics of the environment
//Can be multiple?
const structure = [
  'Follows a clear setup, conflict, resolution / lack of resolution',
  'Is told as memories are, without regard for chronology, and with all the elements out of proportion',
  'Starts off minimal but keeps building and building until the release',
  'Loud during the verses, but quiet during the chorus',
  'The closer you get to the character the more reverb there is. Objects and events can be characters, too.',
  'Every time the mood changes, so does the room.',
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
  'Andy Shauf'
]

// Modifiers for the preceding, comes after the word "but"
// 1 in 3 chance of appearing
const instMod = [
  'with Hyperpop influences',
  'made with the bare minimum',
  'with a crazy shuffle',

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
]

// Modifiers for the preceding, , comes after the word "but"
// 1 in 3 chance of appearing
const vocMod = [
  'with a vintage mic setup',
  'recorded like Blonde',
]


const promptClick = () => {
  const rng = Math.floor(Math.random() * prompt.length)
  setPromptRes(prompt[rng])
  setB1('clicked')
}

// function randomNoRepeats(array: any) {
//   var copy = array.slice(0);
//   return function() {
//     if (copy.length < 1) { copy = array.slice(0); }
//     var index = Math.floor(Math.random() * copy.length);
//     var item = copy[index];
//     copy.splice(index, 1);
//     return item;
//   };
// }

const titleClick = () => {
  const rng = Math.floor(Math.random() * prompt.length)

  setTitleRes('')
  setB2('clicked')
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

      <h5>Prompt</h5>
      <Button variant="primary" className={b1} onClick={() => titleClick()}>Generate</Button>
      <div>{titleRes}</div>
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