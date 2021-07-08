import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  
  Carousel,
  CardImg,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import publicidade_01 from "../img/publicidade_01.png"
import Img1 from "../img/img1.png"
import sac from "../img/sac.jpg"
import price from "../img/price.jpg"
import jcjs from "../img/jcjs.jpg"
import Img3 from "../img/img3.png"
import Img4 from "../img/img4.png"
import Img5 from "../img/img5.png"
import Img6 from "../img/img6.png"
import Img7 from "../img/img7.png"
import Img8 from "../img/img8.png"
import Img9 from "../img/img9.png"
import Img10 from "../img/img10.png"
import Img11 from "../img/img11.png"
import Img21 from "../img/img21.png"
import Img22 from "../img/img22.png"
import Img51 from "../img/img51.png"
import Img52 from "../img/img52.png"
import Img53 from "../img/img53.png"
import Img54 from "../img/img54.png"
import Img55 from "../img/img55.png"
import Img56 from "../img/img56.png"
import Img57 from "../img/img57.png"
import Img58 from "../img/img58.png"
import Img59 from "../img/img59.png"
import Img60 from "../img/img60.png"
import Img61 from "../img/img61.png"
import Img62 from "../img/img62.png"
import Img64 from "../img/img64.png"

import styles from '../css/styles.css'

const items = [
  {
    id: 1,
    src: publicidade_01,
    caption: ''
  },  
  {
    id: 2,
    src: sac,
    caption: ''
  },
  {
    id: 3,
    src: price,
    caption: ''
  },
  {
    id: 4,
    src: jcjs,
    caption: ''
  }
];

const Carousels = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        {/* <img src={props.foto} alt={item.altText}/> */}
        {/*<img className="imagenCarousel" src={item.url} alt={item.altText} />  */}
  
        <CardImg top src={item.src} />   
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div class="container">    
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 550px;
              marginTop: '-2rem';
              paddingTop: '5rem';
              paddingBottom: '3rem';
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
    <div class="row">
 <div class="col">
 <CardTitle tag="h5">Right Investment</CardTitle>
  {/* 
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  */}
      <CardImg top src={Img1} alt="Card image cap" />
 </div>
 <div class="col">
 <CardTitle tag="h5">Incluir </CardTitle>
  {/* 
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  */}
      <CardImg top src={Img56} alt="Card image cap" />
 </div>
 <div class="col">
 <CardTitle tag="h5">Ajuda</CardTitle>
  {/* 
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  */}
      <CardImg top src={Img3} alt="Card image cap" />
 </div>
 <div class="col">
 <CardTitle tag="h5">Lista de Investimentos</CardTitle>
 {/* 
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
*/}
      <CardImg top src={Img4} alt="Card image cap" />
 </div>
</div>
<div class="row">
 <div class="col-3">
 <CardTitle tag="h5">Empréstimo</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"> Juro Composto</CardSubtitle>
  {/*              
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  */}
      <CardImg top src={Img22} alt="Card image cap" />
 </div>
 <div class="col-3">
 <CardTitle tag="h5">Empréstimo</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Juro Simples</CardSubtitle>
  {/*
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  */}
      <CardImg top src={Img21} alt="Card image cap" />
 </div>
 <div class="col-3">
 <CardTitle tag="h5">SAC</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Sistema de Amortização Constante</CardSubtitle>
  {/*              
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  */}
      <CardImg top src={Img6} alt="Card image cap" />
 </div>
 <div class="col-3">
 <CardTitle tag="h5">Sistema Price </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Sistema de Amortização </CardSubtitle>
  {/*     
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  */}
      <CardImg top src={Img64} alt="Card image cap" />
 </div> 
</div>
    </div>  
    
  );
}

export default Carousels;


