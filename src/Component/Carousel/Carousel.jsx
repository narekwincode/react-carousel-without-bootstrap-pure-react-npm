import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {

  return (
    
    <div className='carousel'>
        <div className='carouselbar'> 
        <CarouselProvider
        naturalSlideWidth={20}
        naturalSlideHeight={20}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><img className='img' src="https://images2.boardingschoolreview.com/photo/1122x864/1000/593/img-academy-0Kqhnq.jpg" alt="" /></Slide>
          <Slide index={1}><img className='img' src="https://images2.boardingschoolreview.com/photo/1122x864/1000/593/img-academy-oqxuxY.jpg" alt="" /></Slide>
          <Slide index={2}><img className='img' src="https://img.grouponcdn.com/deal/3YDrDbdRRXry5T57kKD9anu5g4fa/3Y-1200x720/v1/c870x524.jpg" alt="" /></Slide>
        </Slider>
        <div className='btn'>
              <ButtonBack className='btnone'>Back</ButtonBack>
              <ButtonNext className='btnone'>Next</ButtonNext>
        </div>
        
        
      </CarouselProvider>
        </div>
   
    </div>
  )
}

export default Carousel