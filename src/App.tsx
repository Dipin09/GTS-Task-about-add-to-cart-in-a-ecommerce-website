import Cart from './components/Cart'
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import BlogSection from './components/BlogSection'
import { CartContextProvider } from './components/CartContext'
import Category from './components/Category'
import Feature from './components/Feature'
import FeatureSectionBreakfast from './components/FeatureSectionBreakfast'
import FeatureSectionFruits from './components/FeatureSectionFruits'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MobNavBar from './components/MobNavBar'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'

function App() {
  
  const [showCart, setShowCart] = useState(false);

  return (
   <>
   <CartContextProvider>
   <main>
     <Navbar setShowCart={setShowCart} />
     <MobNavBar setShowCart={setShowCart} />
     <Hero />
     <Category />
     <FeatureSectionFruits />
     <FeatureSectionBreakfast />
     <Banner />
     <BlogSection />
     <NewsLetter />
     <Feature />
     <Footer />
     {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
   </main>
   </CartContextProvider>
   
   </>
  )
}

export default App
