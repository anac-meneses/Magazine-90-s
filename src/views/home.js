import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import rick1 from '../img/rick1.jpg';
import rick2 from '../img/rick2.jpg';
import rick3 from '../img/rick3.png';
import cam from '../img/cam.svg';
import seta from '../img/arrow.svg';
import bomb from '../img/bomb.svg';
import roda from '../img/roda.svg';
import nav from '../img/nav2.svg';
import hom from '../img/hom.svg';
import Card from '../components/cards';
import '../App.css';


function Home() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('https://anac-meneses.github.io/json-test/').then((response) => response.json()).then(setData);
  },[]);

  const cliqueEsquerda = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const cliqueDireta = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container >
      <br />
      {/* carrosel */}
      <Carousel variant="dark">
        <Carousel.Item interval={1500}>
          <img
            className="d-block"
            src={rick1}
            alt="First slide"
            id='imgCarousel'
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block"
            src={rick2}
            alt="Second slide"
            id='imgCarousel'
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
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
      <section id='categoriasLink' className='dragscroll'>
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
      <div className='containerCard' ref={carousel}>
      {data.map((item) => {
        const {id,  name, price, oldPrice, image} = item;
        return(
          <Card key={id} produto={name} imagem={image} oldPrice={oldPrice} price={price} />
        );
      })}
      </div>
      <div className='buttonDiv'>
        <button id='buttonsCarrousel' onClick={cliqueEsquerda}><img src={seta} alt='scroll esquerda' id="setaImg"/></button>
        <button id='buttonsCarrousel' onClick={cliqueDireta} className='direita'><img src={seta} alt='scroll direita' id="setaImg"/></button>
      </div>
      <br/>
    </Container>
  );
}


export default Home;