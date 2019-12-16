import React from 'react';
import '../css/header.css';

function Header(props) {
  return (
    <h1>{props.theHeaderText}</h1>
  );
}

export default Header;