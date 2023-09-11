import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import img1 from "../../images/img1111.png"

function Banner() {
  return (
    <Carousel 
    className="bg-amazon_light max-h-52"
   autoPlay 
    infiniteLoop 
    showStatus={false} 
    showIndicators={false}
    showThumbs={false} 
    interval={4000}>
      <Carousel.Item priority> 
        <Image className="d-block w-100" src={img1} alt="Banner"/>
        <Carousel.Caption className='mb-5 pb-5'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className="d-block w-100" src={img1} alt="Banner"/>
        <Carousel.Caption className='mb-5 pb-5'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <Image className="d-block w-100" src={img1} alt="Banner"/>
        <Carousel.Caption className='mb-5 pb-5'>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;