// Write your code
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgColor = isDarkTheme ? 'dark-bg-color' : 'light-bg-color'
      const textHeading = isDarkTheme ? 'dark-text' : 'light-text'
      return (
        <>
          <Navbar />
          {isDarkTheme ? '' : <hr className="separator" />}
          <div className={`about-container ${homeBgColor}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-image"
              />
            )}

            <h1 className={`about-heading ${textHeading}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
