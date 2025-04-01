// src/components/LegungCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import LegungBox from './LegungBox.jsx';

// WICHTIG: "slick-carousel" CSS entweder hier oder global importieren:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const LegungCarousel = ({ legungen, onLegungClick }) => {
  const settings = {
    dots: true,         // Punkte zur Navigation
    arrows: true,       // Pfeile (vor/zurück) für Desktop
    infinite: true,     
    speed: 500,
    slidesToShow: 3,    // 3 Legungen pro „Seite“ (auf großen Screens)
    slidesToScroll: 1,
    swipeToSlide: true, // Sorgt für flüssiges Scrollen per Touch/Swipe
    responsive: [
      {
        breakpoint: 1024, // unter 1024px → 2 Legungen pro Seite
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,  // unter 768px → 1 Legung pro Seite
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
              {/* Jede Legung als eigene LegungBox */}
              <LegungBox
                legung={legung}
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
