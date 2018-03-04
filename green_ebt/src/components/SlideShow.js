import React from 'react';
import ReactDOM from 'react-dom';
import { Slide } from 'react-slideshow-image';
import '../App'

import Ivan from '../images/Ivan_Mendoza.jpg';
import Omari from '../images/Omari_Rose.jpg';
import Shanda from '../images/Le_Shanda_Miller.jpg';

const images = [
  Ivan,
  Omari,
  Shanda
];

const SlideShow = () => {
    return (
      <div className="Photos">
        <Slide
          images={images}
          duration={5000}
          transitionDuration={1000}
        />
      </div>
    )
}

export default SlideShow;

