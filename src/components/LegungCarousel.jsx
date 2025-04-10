import React from 'react';
import Slider from 'react-slick';
import LegungBox from './LegungBox.jsx';

const LegungCarousel = ({ legungen, onLegungClick }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="bg-[#D9A384] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {legungen.map((legung, idx) => (
            <div key={idx} className="px-2">
              <LegungBox legung={legung} onClick={() => onLegungClick(legung.component)} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LegungCarousel;
