import React from 'react';
import Head from '../Components/Head';
import styled from 'styled-components';

// Importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importação do react-bootstrap
import CardComponent from './Card';

// Importação do arquivo css de animação do card
import './CardAnimation.css';

const DivContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex: 1;
     height: 100vh;
`;

const DivContainerChildren = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
`;

const ButtonCard = styled.button`
     border: none;
     width: 8rem;
     height: 3rem;
     color: white;
     font-size: 16pt;
     font-weight: 600;
     font-family: sans-serif;
     background-color: #41a;
     border-radius: 4px;
`;

const Title = styled.h1`
     font-size: ${({ tam }) => tam || 3}rem;
     font-family: sans-serif;
     font-weight: 800;;
     color: #42a;
`;

const AppCard = () => {
     const [active, setActive] = React.useState(false);

     return (
          <DivContainer>
               <DivContainerChildren style={{marginRight: "30px"}}>
                    <Title tam="5">Card</Title>
                    <ButtonCard className="mt-2" onClick={() => {setActive(!active)}}>{active ? 'Close' : 'Open'}</ButtonCard> 
               </DivContainerChildren>
               <DivContainerChildren>
                    {active ? <CardComponent className={"animeLeft"}/> : <CardComponent className={"animeDestroi"} />}  
               </DivContainerChildren>
          </DivContainer>
     );
}

export default AppCard;