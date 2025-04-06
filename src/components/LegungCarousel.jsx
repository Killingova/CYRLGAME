import React from 'react';
import Slider from 'react-slick';
import LegungBox from './LegungBox.jsx';

// CSS von "slick-carousel" muss global importiert werden:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const LegungCarousel = ({ legungen, onLegungClick = () => {} }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="bg-[#F2CA50] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {legungen.map((legung, idx) => (
            <div key={idx} className="px-2">
              <LegungBox
                legung={legung}
                // Klick ruft die übergebene Funktion auf,
                // übergibt die Komponente der Legung
                onClick={() => onLegungClick(legung.component)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LegungCarousel;
