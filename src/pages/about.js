import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <div className="about">
    <h1>Professional Career</h1>
    <div className="professional-cards">
      <div className="card">
        <h1>Software Engineer <span>@</span> <a href="https://www.hirezstudios.com/">Hi-Rez Studios</a></h1>
        <p className="desc">I develop web apps for marketing, account management, and promotions.</p>
        <p className="tags">React, JavaScript, PHP, Wordpress, AWS</p>
        <p className="where">July 2012 - Now</p>
      </div>
      <div className="card">
        <h1>Web Engineer <span>@</span> <a href="http://www.dreamcreative.com/">Hello Pixel</a></h1>
        <p className="desc">Developing SaaS and PaaS for leading marketing studio.</p>
        <p className="tags">PHP, Wordpress, REST API, MySQL</p>
        <p className="where">October 2011 - October 2012</p>
      </div>
      <div className="card">
        <h1>Web Software Engineer <span>@</span> <a href="https://www.amazon.com/">Amazon</a></h1>
        <p className="desc">I designed, developed, and documented customer service portal framework.</p>
        <p className="tags">Amazon (CloudSearch, EC2, RDS, S3)</p>
        <p className="where">October 2010 - October 2011</p>
      </div>
      <div className="card">
        <h1>Network Analyst <span>@</span> <a href="https://www.airforce.com/">United States Air Force</a></h1>
        <p className="desc">Installation, architecture, and maintenance of base area network.</p>
        <p className="tags">WAN</p>
        <p className="where">October 2010 - October 2011</p>
      </div>
    </div>
    <h1>Open Source</h1>
    <div className="open-source-cards">
      <p>...</p>
    </div>
    <h1>Education</h1>
    <div className="education-cards">
      <div className="card">
        <h1>Bachelor Degree <span>@</span> <a href="http://www.marshall.edu/">Marshall University</a></h1>
        <p className="desc">Computer Science</p>
        <p className="where">August 2004 - May 2009</p>
      </div>
    </div>
    <h1>Life</h1>
    <div className="life-cards">
      <div className="card">
        <h1>Super Mario Odyssey <span>on</span> Nintendo Switch</h1>
        <p className="progress">Story complete. Cap and Cascade Kingdom 100%.</p>
        <p className="rating">Highly Recommend</p>
      </div>
      <div className="card">
        <h1>Call of Duty: WWII <span>on</span> Playstation 4</h1>
        <p className="progress">Level 20. Story incomplete.</p>
        <p className="rating">Recommend</p>
      </div>
      <div className="card">
        <h1>The Godfather <span>on</span> Boardgames</h1>
        <p className="progress">Three plays. Worker placement. Eric Lang.</p>
        <p className="rating">Highly Recommend</p>
      </div>
    </div>
  </div>
)

export default AboutPage
