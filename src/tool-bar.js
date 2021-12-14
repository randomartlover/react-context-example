import React from 'react';
import ThemedButton from './themed-button';

class ThemeButton extends React.Component {
  render() {
    return (
      <ThemedButton onClick={this.props.onThemeChange}>
        Toggle dark or white?
      </ThemedButton>
    )
  }
}

export default ThemeButton;
