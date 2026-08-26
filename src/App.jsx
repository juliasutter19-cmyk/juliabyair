import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Training from './components/Training'
import TrainingOverview from './components/TrainingOverview'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Training />
        <TrainingOverview />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
