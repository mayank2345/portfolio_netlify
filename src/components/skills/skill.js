import React from 'react';
import './skill.css';
import dashboardlogo from '../../assets/dashboardlogo.png';
import webApplogo from '../../assets/webApplogo.png';
import ArduinoCommunityLogo from '../../assets/ArduinoCommunityLogo.png'

const Skill = () => {
  return (
    <div>
      <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled full-stack web application designer with experience in creating both Flask-based and MERN-based web applications. I have a strong passion for learning and staying up-to-date with new technologies. Additionally, I possess expertise in container orchestration tools like Docker and Kubernetes, making me well-rounded in both web development and DevOps.</span>
        <div className='skillsBars'>
            <div className='skillBar'>
                <img src={dashboardlogo} alt='dashImg' className='skillBarImg'></img>
                <div className='skillbarText'>
                    <h2>Dashboard Designing</h2>
                    <p>I have created interactive dashboards featuring dynamic charts powered by Highcharts.js and data tables using Tabulator, delivering insightful data visualization and analysis.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={webApplogo} alt='WebImg' className='skillBarImg'></img>
                <div className='skillbarText'>
                    <h2>Web Application Designing</h2>
                    <p>I designed Flask-based web pages during my internship and independently developed web applications using the MERN stack, showcasing my versatile web development skills.</p>
                    </div>
            </div>
            <div className='skillBar'>
                <img src={ArduinoCommunityLogo} alt='ArduinoImg' className='skillBarImg'></img>
                <div className='skillbarText'>
                    <h2>Arduino Projects</h2>
                    <p>During my bachelor's degree, I completed Arduino projects, including a Dual Axis Solar Panel Positioning System and robotic arms, demonstrating my hands-on experience in hardware and robotics.</p>    
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skill
