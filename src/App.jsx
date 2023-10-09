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
    </div>
  )
}

export default App
