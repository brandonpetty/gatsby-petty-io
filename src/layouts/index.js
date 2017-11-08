import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () => (
  <header>
    <a className="twitter" target="_blank" href="https://twitter.com/brandonpetty">@brandonpetty</a>
    <nav>
      <Link className={typeof window !== 'undefined' && window.location.pathname === '/' ? 'active' : ''} to="/">Blog</Link>
      <Link className="is-disabled" to="/learn">Learn</Link>
      <Link className={typeof window !== 'undefined' && window.location.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
      <a href="/brandon-petty-resume.pdf">Resume</a>
    </nav>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Brandon Petty"
      meta={[
        { name: 'Full Stack Developer', content: 'Atlanta, GA' }
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
