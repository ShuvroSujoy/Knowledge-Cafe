import { Typewriter } from 'react-simple-typewriter';
import './App.css'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header/>
      <HeroSection/>
      <h1 className='text-center'>I am a  <Typewriter 
      words={['Developer', 'React-Developer','Free Fire Gammer',]} 
      loop={10}
      cursor
      cursorStyle='_'  />
      </h1>
    </div>
  )
}

export default App
