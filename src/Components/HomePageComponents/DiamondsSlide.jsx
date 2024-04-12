import React from 'react';
import './DiamondsSlide.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class DiamondsSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images || [],
      title: props.title || '', 
      description: props.description || '' 
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplaySpeed: 1500,
          },
        },
      ],
    };

    return (
      <div className='diamonds-slide'>
        <div className='diamonds-slide-title'>
          <h2>{this.state.title}</h2>
        </div>
        <Slider {...settings}>
          {this.state.images.map((image, index) => (
            <div key={index} className='diamonds-slide-item'>
              <img src={image.src} alt={`Diamond slide ${index + 1}`} />
              <p>{image.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default DiamondsSlide;
