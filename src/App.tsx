import { useState } from "react";
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Life is what happens when you're busy making other plans.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "It is not what happens to you, but how you react to it that matters.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The only way to do great work is to love what you do.",
  "You must be the change you wish to see in the world.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "The best way to predict the future is to create it.",
  "It does not matter how slowly you go as long as you do not stop.",
  "You miss 100% of the shots you don't take.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, so don't waste it living someone else's life.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "The future belongs to those who believe in the beauty of their dreams."
];

const authors = [
  "Franklin D. Roosevelt",
  "John Lennon",
  "Martin Luther King Jr.",
  "Ralph Waldo Emerson",
  "Winston Churchill",
  "Ralph Waldo Emerson",
  "Ralph Waldo Emerson",
  "Epictetus",
  "Henry David Thoreau",
  "Steve Jobs",
  "Mahatma Gandhi",
  "Oscar Wilde",
  "Abraham Lincoln",
  "Confucius",
  "Wayne Gretzky",
  "Nelson Mandela",
  "Walt Disney",
  "Steve Jobs",
  "Thomas Edison",
  "Eleanor Roosevelt"
];
const colors = [
  'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500',
  'bg-orange-500', 'bg-lime-500', 'bg-emerald-500', 'bg-cyan-500',
  'bg-rose-500', 'bg-fuchsia-500', 'bg-sky-500', 'bg-violet-500',
  'bg-amber-500', 'bg-zinc-500', 'bg-gray-500', 'bg-stone-500'
];

function App() {

      const handleChange = ()=>(Math.floor(Math.random()*19)+1);
        const[quo,setquo] = useState(quotes[0]);
        const[auth,setauth] = useState(authors[0]);

        const[color,setcolor] =useState('bg-yellow-500')

        const changeQuote = ()=>{
          const idx = handleChange();
          setquo(quotes[idx]);
          setauth(authors[idx]);
          setcolor(colors[idx]);
        }
        const tweet = ()=>{
          const tweettext = encodeURIComponent(quo);
          const tweeturl = `https://twitter.com/intent/tweet?text=${tweettext}`;
          window.open(tweeturl,'_blank')
        }
  
  return (
    <div className={`flex flex-col items-center ${color} h-screen`}>
      <div className="flex box-border h-auto w-[500px] mt-[150px]  bg-white ">
          <div className="text-black  text-4xl font-serif mt-6 ml-4">
            "{quo}"
          <div className="ml-[300px] mt-1 text-base " >
              -{auth}
          </div>
          <div className="flex items-center space-x-72">
          <FontAwesomeIcon icon={faTwitter}  className={`${color} h-10 w-12 rounded mb-8 text-white`} onClick={tweet} /> 
            <button className={`${color} h-10 w-32 text-xl mt-2 mb-10 rounded`} onClick={changeQuote}>
            New Quote
            </button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default App
