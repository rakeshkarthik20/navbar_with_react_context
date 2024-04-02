import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
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
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-image"
              />
            )}

            <h1 className={`home-heading ${textHeading}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
