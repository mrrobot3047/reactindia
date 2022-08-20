import React from 'react'
import video2 from '../../videos/video.mp4'
import Card from '../Card/Card'
import Footer from '../footer/Footer'
import '../Home/Home.css'
import Forms from '../Form/Forms'

const Home = () => {
  return (
    <div className='hero-container'>
        <div className='overlay'>
            
      
        </div>
          <video src={video2} autoPlay loop muted/>
        <div class ="content">
            <h1>Welcome</h1>
            <p>To India</p>
        </div>
        <Card/>
        <Forms/>
        <Footer/>
    

    </div>
  
    
   
  )
}

export default Home