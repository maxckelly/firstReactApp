import React from 'react';
import '../css/trailer.css';

class Trailer extends React.Component {
  // The below tells react what to render
  render() {
    return (
      <h5 className="trailerCSS"> Page Number: {this.props.pageNumber} </h5>
    );
  }
};

export default Trailer;