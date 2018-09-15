import React from 'react';
import img1 from '../images/gen/1.jpg';
import img2 from '../images/gen/2.jpg';
import img3 from '../images/gen/3.jpg';
import img4 from '../images/gen/4.jpg';
import img5 from '../images/gen/5.jpg';
import img6 from '../images/gen/6.jpg';
import img7 from '../images/gen/7.jpg';
import img8 from '../images/gen/8.jpg';
import img9 from '../images/gen/9.jpg';
import img10 from '../images/gen/10.jpg';

const Thumbs = props => {
  return (
    <div className="thumbs">
      <img src={img1} alt="thumbnail" />
      <img src={img2} alt="thumbnail" />
      <img src={img3} alt="thumbnail" />
      <img src={img4} alt="thumbnail" />
      <img src={img5} alt="thumbnail" />
      <img src={img6} alt="thumbnail" />
      <img src={img7} alt="thumbnail" />
      <img src={img8} alt="thumbnail" />
      <img src={img9} alt="thumbnail" />
      <img src={img10} alt="thumbnail" />
    </div>
  )
}

export default Thumbs;
