import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Banner from './components/Banner'
import { FeaturesSectionDemo } from './components/FeaturesGrid'
import FAQ from './components/FAQ'
import MetricsSection from './components/MetricsSections'
import UseCases from './components/UseCases'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <MetricsSection/>
      <Features/>
      <Banner/>
      <FeaturesSectionDemo/>
      <UseCases/>
      <FAQ/>
      <Footer/>
  

    </>
  )
}

export default App
