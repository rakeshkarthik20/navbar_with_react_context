// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const navbarbackground = isDarkTheme
        ? 'dark-background'
        : 'light-background'

      const textColor = isDarkTheme ? 'dark-text' : 'light-text'
      return (
        <div className={`navbar-container ${navbarbackground}`}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          )}

          <ul className="component-container">
            <Link to="/" className="link-item">
              <li className={`component-heading ${textColor}`}>Home</li>
            </Link>
            <Link to="/about" className="link-item">
              <li className={`component-heading ${textColor}`}>About</li>
            </Link>
          </ul>
          <button
            className="theme-button"
            type="button"
            onClick={onClickChangeTheme}
            data-testid="theme"
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="theme-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="theme-image"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
