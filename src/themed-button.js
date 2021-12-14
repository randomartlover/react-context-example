import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component{
  render(){
    const props = this.props;
    const theme = this.context.theme;

    return (
      <button
        {...props}
        style={{ "backgroundColor": theme.background, "color": theme.foreground }}
      />
    )
  }
}
ThemedButton.contextType = ThemeContext
export default ThemedButton;
