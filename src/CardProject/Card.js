import React from 'react';

// Importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importação do react-bootstrap
import Card from 'react-bootstrap/Card';

const CardComponent = ({className}) => {
     return (
          <Card bg="dark" text="white" className={`mt-4 ${className}`} style={{ maxWidth: '30rem'}}>
               <Card.Header>Title of Card</Card.Header>
               <Card.Body>
                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Card.Text>
               </Card.Body>
          </Card>
     );
}

export default CardComponent;