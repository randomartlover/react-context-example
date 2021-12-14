import React from 'react';
import ThemedButton from './themed-button';
import ToolBar from './tool-bar';
import {themes, ThemeContext} from './theme-context';

class App extends React.Component {
  constructor(props){
    super(props)
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      theme: themes.light
    };
  }

  toggleTheme(){
    this.setState({theme: this.state.theme == themes.dark ? themes.light : themes.dark})
  }

  render (){
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <ToolBar
            onThemeChange={this.toggleTheme}
          />
        </ThemeContext.Provider>
        <ThemedButton>
          Always white
        </ThemedButton>
      </>
    )
  }
}

export default App;
