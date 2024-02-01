import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Carousel ({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
{slides.map((s, index) => (
    <div key={index} className='relative flex justify-center items-center h-screen'>
        <div className='cardContent absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2 w-[10rem] text-center'>
            <p className='bg-black bg-opacity-50 text-white p-2'>
                Experience our AR/VR feature virtually. Click the button to try it out!
            </p>
            <button className='bg-red-600 text-white'>Try Out</button>
        </div>
        <img className='h-[20rem] mx-auto' src={s} alt={`slide ${index}`} />
    </div>
))}
    </Slider>
  )
}

export default Carousel
