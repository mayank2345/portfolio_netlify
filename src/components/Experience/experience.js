import React from 'react'
import './experience.css'
import Intel from '../../assets/intel.png'


const Experience = () => {
  return (
    <section id='experience'>
        <h2 className='expTitle'>Experience</h2>
            <div className='companyCard'>
                <div className='company' onClick={() => {
                      var url = "https://drive.google.com/file/d/1_Q8LNBbajQ1fFfZdJ_eNd-LU7BrU7TpZ/view";
                      window.open(url)
                      }}>
                    <div className='companyLogoCol'>
                        <img src={Intel} alt='ComLogo' className='companyLogo'></img>
                        <div className='companyDate'>June 2022 - June 2023</div>
                    </div>
                    <div className='companyContent'>
                        <h2 className='companyName'>Intel Technologies</h2>
                        <div className='companyRole'>Network Software Intern</div>
                        <ul className='paralist'>
                            <li><p>Demonstrated expertise in both frontend and backend development, leveraging Python, Flask, Jinja2, SQL Query, PostgreSQL, JavaScript, HTML, CSS, and Bootstrap 5 to contribute to the implementation and enhancement of new features.</p></li>
                            <li><p>Re-designed the dashboards and improved the page loading speed by 80%.</p></li>
                            <li><p>Possess a proficient understanding of GitHub and version control practices, enabling effective collaboration and streamlined code management.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Experience
