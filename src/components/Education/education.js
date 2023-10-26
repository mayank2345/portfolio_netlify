import React from 'react'
import './education.css'
import nitr from "../../assets/nitr.png"
import srm from "../../assets/srm.png"

const Education = () => {
  return (
      <section id='education'>
        <h2 className='eduTitle'>Education</h2>
        <div className='eduCard'>
            <div className='collage'>
                <div className='logoCol'>
                    <img src={nitr} alt='CollegeLogo' className='colLogoImg'></img>
                    <div className='collDate'>Sept 2021-June 2023</div>
                </div>
                <div className='collegeInfo'>
                    <h2>NIT Rourkela</h2>
                    <span className='branch'>MTech: Electronic System and Communication</span>
                    <div className='cgpa'>CGPA: 8.65</div>
                    <ul className='subList'>
                        <li><p>Advanced Communication</p></li>
                        <li><p>Advanced Signal Processing</p></li>
                        <li><p>Image Processing</p></li>
                        <li><p>Embedded Computing System</p></li>
                        <li><p>Computer Vision</p></li>
                    </ul>
                </div>
            </div>
            <div className='collage'>
                <div className='logoCol'>
                    <img src={srm} alt='CollegeLogo' className='colLogoImg'></img>
                    <div className='collDate'>July 2015-May 2019</div>
                </div>
                <div className='collegeInfo'>
                    <h2>SRM University</h2>
                    <span className='branch'>BTech: Electrical and Electronic</span>
                    <div className='cgpa'>CGPA: 8.26</div>
                    <ul className='subList'>
                        <li><p>Power System</p></li>
                        <li><p>Electrical Machine</p></li>
                        <li><p>Power Electronics</p></li>
                        <li><p>Digital and Analog Electronics</p></li>
                        <li><p>Control System</p></li>
                        <li><p>Signal and Systems</p></li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Education
