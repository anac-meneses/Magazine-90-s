import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import rick1 from '../img/rick1.jpg';
import rick2 from '../img/rick2.jpg';
import rick3 from '../img/rick3.png';
import cam from '../img/cam.svg';
import bomb from '../img/bomb.svg';
import roda from '../img/roda.svg';
import nav from '../img/nav.svg';
import hom from '../img/hom.svg';
import '../App.css';


function Home() {
  return (
    <Container>
      <br />
      {/* carrosel */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            src={rick1}
            alt="First slide"
            id='imgCarousel'
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            src={rick2}
            alt="Second slide"
            id='imgCarousel'
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            src={rick3}
            alt="Third slide"
            id='imgCarousel'
          />
        </Carousel.Item>
      </Carousel>
      {/* fim carrosel */}

      {/* linha de categorias */}
      <section id='categoriasLink'>
        <a href='/'> <img
          src={cam}
          alt="categoria"
          id='imgButton1'
        /></a>
        <a href='/'> <img
          src={bomb}
          alt="categoria"
          id='imgButton2'
        /></a>
        <a href='/'> <img
          src={roda}
          alt="categoria"
          id='imgButton'
        /></a>
        <a href='/'> <img
          src={nav}
          alt="categoria"
          id='imgButton2'
        /></a>
        <a href='/'> <img
          src={hom}
          alt="categoria"
          id='imgButton1'
        /></a>
      </section>
      {/* fim linha de categorias */}

      <hr/>

    </Container>
  );
}


export default Home;