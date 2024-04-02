// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgColor = isDarkTheme ? 'dark-bg-color' : 'light-bg-color'
      const textHeading = isDarkTheme ? 'dark-text' : 'light-text'
      return (
        <>
          <Navbar />
          {isDarkTheme ? '' : <hr className="separator" />}
          <div className={`home-container ${homeBgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-heading ${textHeading}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-description ${textHeading}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
