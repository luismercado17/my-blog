import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Slider() {
    return (
<Carousel fade>
  <Carousel.Item>
    <img style={{width: "100%"}} className="slider-image" src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-irregular-geometric-creative-gradient-banner-background-image_51434.jpg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width: "100%"}} className="slider-image" src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-space-universe-banner-background-and-technologymeteorplanetcosmic-banner-image_54036.jpg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default Slider;