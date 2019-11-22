import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <span>Made by Tafang Joshua © {new Date().getFullYear()}. Designed by Justin Chi</span>
      </div>
    );
  }
}

export default Footer;
