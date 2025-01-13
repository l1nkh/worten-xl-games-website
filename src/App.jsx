import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Partners from './components/Partners.jsx'
import Location from './components/Location.jsx';
import Alert from './components/Alert.jsx';
import { AudioProvider } from './contexts/AudioContext.jsx';
import { AlertProvider } from './contexts/AlertContext.jsx';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>

      <AlertProvider>
        <Alert />
        <AudioProvider>
          <Navbar />
          <Hero />
        </AudioProvider>
      </AlertProvider>
      <About />
      <Features />
      <Partners />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}

export default App