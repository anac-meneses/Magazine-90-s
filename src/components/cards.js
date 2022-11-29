import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import close from'../img/close.svg';

function card(props) {
  return (
    <Card className="card" key={props.id}>
      <Card.Header className='cardHeader'><img src={close} alt='close button' id='close' />
      </Card.Header>
      <Card.Img variant="top" src={props.imagem} id='imgCard' />
      <Card.Body className='cardBody'>
        <Card.Title>{props.produto}</Card.Title>
        <Card.Text className='oldPrice'>
          {props.oldPrice}
        </Card.Text>
        <Button className='buttonCard'>R$ {props.price}</Button>
      </Card.Body>
    </Card>
  
  );
}

export default card;