import React from 'react';
import ThemedButton from './themed-button';
import {ThemeContext} from './theme-context';

class ThemeButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({toggleTheme})=> (
          <ThemedButton onClick={toggleTheme}>
          Toggle dark or white?
        </ThemedButton>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemeButton;
