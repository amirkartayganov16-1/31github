import React from 'react';
import './CenteredContent.css';

function CenteredContent(props) {
  return (
    <div className="centered-content">
      {props.children}
    </div>
  );
}

export default CenteredContent;
