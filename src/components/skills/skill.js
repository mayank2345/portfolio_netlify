import React, { useState } from 'react';
import './skill.css';
import dashboardlogo from '../../assets/dashboardlogo.png';
import webApplogo from '../../assets/webApplogo.png';
import ArduinoCommunityLogo from '../../assets/ArduinoCommunityLogo.png'
const Skill = () => {

  const [isDiv2Moved, setDiv2Moved] = useState(false);
  const [isDiv2Moved2, setDiv2Moved2] = useState(false);
  const [isDiv2Moved3, setDiv2Moved3] = useState(false);

  const toggleDiv2Position = () => {
    setDiv2Moved((prevIsDiv2Moved) => !prevIsDiv2Moved);
  };
  const toggleDiv2Position2 = () => {
    setDiv2Moved2((prevIsDiv2Moved2) => !prevIsDiv2Moved2);
  };
  const toggleDiv2Position3 = () => {
    setDiv2Moved3((prevIsDiv2Moved3) => !prevIsDiv2Moved3);
  };

  const div2Class = isDiv2Moved ? 'slidebar moved-down' : 'slidebar';
  const div2Class2 = isDiv2Moved2 ? 'slidebar moved-down' : 'slidebar';
  const div2Class3 = isDiv2Moved3 ? 'slidebar moved-down' : 'slidebar';

  return (
      <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled full-stack web application designer with experience in creating both Flask-based and MERN-based web applications. I have a strong passion for learning and staying up-to-date with new technologies. Additionally, I possess expertise in container orchestration tools like Docker and Kubernetes, making me well-rounded in both web development and DevOps.</span>
        <div className='skillsBars'>

            <div className='skillBar' onClick={toggleDiv2Position}>  
              <img src={dashboardlogo} alt='dashImg' className='skillBarImg'></img>
                <div className='skillbarText'>
                    <h2>Dashboard Designing</h2>
                    <p>I have created interactive dashboards featuring dynamic charts powered by Highcharts.js and data tables using Tabulator, delivering insightful data visualization and analysis.</p>
              </div>
            </div>
            <div className={div2Class}>HTML | CSS | JavaScript | Bootstrap | Highcharts | Tabulator | AG Grid</div>

            <div className='skillBar' onClick={toggleDiv2Position2}>
                <img src={webApplogo} alt='WebImg' className='skillBarImg'></img>
                <div className='skillbarText'>
                    <h2>Web Application Designing</h2>
                    <p>I designed Flask-based web pages during my internship and independently developed web applications using the MERN stack, showcasing my versatile web development skills.</p>
                    </div>
            </div>
            <div className={div2Class2}>Python | Flask | PostgreSQL | CSS | HTML | Bootstrap | JavaScript | MERN </div>

            <div className='skillBar'  onClick={toggleDiv2Position3}>
                <img src={ArduinoCommunityLogo} alt='ArduinoImg' className='skillBarImg'></img>
                <div className='skillbarText'>
                    <h2>Arduino Projects</h2>
                    <p>During my bachelor's degree, I completed Arduino projects, including a Dual Axis Solar Panel Positioning System and robotic arms, demonstrating my hands-on experience in hardware and robotics.</p>    
                </div>
            </div>
            <div className={div2Class3}>Arduino UNO | C Lang | Sensors | Hardware</div>

        </div>
      </section>
  )
}

export default Skill
