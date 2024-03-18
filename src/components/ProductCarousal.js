import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ProductCarousal () {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img
          className="carousal-img"
          src="http://bionic-v3.doradothemes.com/modules/dor_imageslider/images/cindy-slider-01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="carousal-img"
          src="http://bionic-v3.doradothemes.com/modules/dor_imageslider/images/cindy-slider-02.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="carousal-img"
          src="http://bionic-v3.doradothemes.com/modules/dor_imageslider/images/cindy-slider-01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousal;