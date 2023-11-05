import React from 'react'
import './works.css'
import shareMe from '../../assets/shareMe.png'
import textUtility from '../../assets/textUtility.png'


const Works = () => {
  return (
      <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I am recognized for my unwavering commitment to perfection, and I firmly believe that the end result should be flawless, which is why I meticulously focus on even the smallest of details.</span>
        <div className='worksImgs'>
        <button type='button' className='portfoliobtn' onClick={() => {
                      var url = "https://github.com/mayank2345/ShareMe";
                      window.open(url)
                      }}><img src={shareMe} alt='proImg' className='worksImg'></img>
                      </button>

        <button type='button' className='portfoliobtn' onClick={() => {
                      var url = "https://texttoolutility.netlify.app/";
                      window.open(url)
                      }}><img src={textUtility} alt='proImg' className='worksImg'></img>
                      </button>
            
        </div>
      </section>
  )
}

export default Works
