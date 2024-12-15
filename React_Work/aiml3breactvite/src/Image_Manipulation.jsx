import React from 'react';
import './image.css';
import dog from './dog_image.jpeg';

function ImageManipulation() {
  return (
    <div className='image-card'>
      <div className="dog-div">
        <img src={dog} alt="dog" />
      </div>
      <div className="button-div">
        <button>Enhance Height</button>
        <button>Enhance Width</button>
        <button>Rotate</button>
        <button>Color Change</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
