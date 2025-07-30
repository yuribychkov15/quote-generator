import { useState } from 'react'
import './App.css'

function App() {

  const [currentQuote, setCurrentQuote] = useState("");
  const [color, setColor] = useState("");

  const quotes = [
    "The only limit to your impact is your imagination and commitment. - Tony Robbins",
    "Greatness begins beyond your comfort zone. - Robin Sharma",
    "Success is not in what you have, but who you become. - Bo Bennett",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Discipline equals freedom. - Jocko Willink",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Don’t wait. The time will never be just right. - Napoleon Hill",
    "Hard choices, easy life. Easy choices, hard life. - Jerzy Gregorek",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Dream big and dare to fail. - Norman Vaughan",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "The future depends on what you do today. - Mahatma Gandhi",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Life shrinks or expands in proportion to one’s courage. - Anaïs Nin",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
  ]

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];


  function generateQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[index]);
  }

  const changeColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index])
  }
  



  return (
    <>

      <h1>Quote Generator</h1>
      <div className="card">
        <div 
          className="quote-box" 
          style={{
            borderColor: color,
          }}
        >
          <p>
            {currentQuote}
          </p>
        </div>
      </div>
      <button onClick={() => {
        generateQuote();
        changeColor();
      }}>
        Generate Random Quote
      </button>
    </>
  )
}

export default App
