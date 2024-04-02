import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {theme: false}

  toggleTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
  }

  render() {
    const {theme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme: theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
