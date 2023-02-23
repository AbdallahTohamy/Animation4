import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
    return (
     
      <Carousel pause={false} style={{"height":"100vh"}} controls={false} indicators={false} keyboard="false">
      <Carousel.Item  style={{"height":"100vh"}}>
        <img
          className="d-block h-100 w-100"
          src="/images/Cover1.png"
          alt="First slide"
          style={{"object-fit":"cover"}}
        />
        <Carousel.Caption>
          <h3>Zic</h3>
          <p>Quality you can ignore.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style={{"height":"100vh"}}>
      <img
          className="d-block h-100 w-100"
          src="/images/Pool.png"
          alt="second slide"
          style={{"object-fit":"cover"}}
        />

        <Carousel.Caption>
        <h3>Zic</h3>
          <p>Quality you can ignore.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style={{"height":"100vh"}}>
         <img
          className="d-block h-100 w-100"
          src="/images/Race.png"
          alt="third slide"
          style={{"object-fit":"cover"}}
        />

        <Carousel.Caption>
        <h3>Zic</h3>
          <p>Quality you can ignore.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
