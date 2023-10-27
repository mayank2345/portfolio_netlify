import React from 'react'
import './hire.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import resume from '../../assets/Mayank_FullStack.pdf'

const Hire = () => {
  return (
    <div id='hireMe'>
        <div className='hireMeCard'>
            <h2 className='hireTitle'>Hire Me</h2>
            <p className='hireDesc'>If you are seeking a passionate and enthusiastic full-stack developer, please don't hesitate to get in touch with me through any of the following contact details.</p>
            <span className='key'><BsFillTelephoneFill/> Mobile:<span className='value'> 7358087797</span></span>
            <span className='key'><MdEmail/> Email:<a className='value'href='mailto:mayankverma2605@gmail.com'> mayankverma2605@gmail.com</a></span>
            <a className='resume' href={resume}>Resume</a>
        </div>
    </div>
  )
}

export default Hire
