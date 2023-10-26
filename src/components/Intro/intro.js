import React from 'react';
import './intro.css';
import {PiBagSimpleFill} from 'react-icons/pi'
import mayank from '../../assets/mayank.png'
import Popup from 'reactjs-popup';
import Hire from '../Hire/hire';
import splash from '../../assets/splash.gif'

const Intro = () => {
  return (
      <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>
                I'm <span className='introName'>Mayank Verma</span><br/>Software Developer
            </span>
            <p className='introPara'>I'm experienced full-stack developer <br/>with 1+ year expertise in web application designing.</p>
            <Popup trigger={<button className='hireMe'>
                <PiBagSimpleFill className='btnImage'/>Hire me 
            </button>} modal nested>
                {
                  close => (
                      <div className='modal'>
                          <div className='content'>
                              <Hire/>
                          </div>
                      </div>
                    )
                } 
            </Popup>
            <img src={mayank} alt='MayankImage' className='myImage'></img>
            <img src={splash} alt='gif' className='gif'></img>
        </div>
      </section>
  )
}

export default Intro
