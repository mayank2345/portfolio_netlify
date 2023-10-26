import React from 'react'
import './works.css'
import shareMe from '../../assets/shareMe.png'
import workingOnIt from '../../assets/workingOnIt.jpg'


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
            <img src={workingOnIt} alt='proImg' className='worksImg'></img>
        </div>
      </section>
  )
}

export default Works
