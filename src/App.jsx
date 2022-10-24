import { useState } from 'react'
import './App.css'
import phrase from './phrase.json';

function App() {
  const randomIndex = Math.floor(Math.random() * phrase.length)
  const [index, setIndex] = useState(randomIndex);

  const next = () => {
    const anotherRandom = Math.floor(Math.random() * phrase.length)
    setIndex(anotherRandom);
  }

  const colors = ["#5EC2B9", "#EE1616", "#005B55", "#2093FA", "#545479", "#530004", "#009DB0", "#DAA21B", "#002556", "#694E16"];

  const randomColorIndex = Math.floor(Math.random() * colors.length)

  document.body.style = `background: ${colors[randomColorIndex]}`

  return (
    <div className="App" style={{ color: colors[randomColorIndex] }}>
      <div className='Card'>
        <div className='p-quoe-container'>
          <div className='quote'>
            <i class="fas fa-quote-left"></i>
          </div>
          <div className='phrase'>
            <p>{phrase[index].quote}</p>
          </div>
        </div>
        <p className='author'>{phrase[index].author}</p>
        <div className='fa-soli'>
          <i onClick={next} class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </div>
  )
}

export default App
