import React from 'react';
import Head from '../Components/Head';
import Form from './Form';
import styled from 'styled-components';

const questions = [
    {
      question: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      answer: 'React.createElement()',
      id: 'p1',
    },
    {
      question: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      answer: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      question: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      answer: 'useFetch()',
      id: 'p3',
    },
    {
      question: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      answer: 'use',
      id: 'p4',
    },
];

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Button = styled.button`
  margin-top: 10px;
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

const AppForm = () => {
    const [next, setNext] = React.useState(0);
    const [display, setDisplay] = React.useState('block');
    const [radio, setRadio] = React.useState('');
    const [result, setResult] = React.useState(0);

    function handleClick() {
        setNext(() => next + 1);
        next === questions.length - 1 && setDisplay('none');
    }

    return (
        <DivContainer>
            <Head title="Forms"/>

            {
            next !== questions.length ? 
            <Form question={questions[next]} value={radio} setValue={setRadio} result={result} setResult={setResult}/>  : 
            <div><h2>Você acertou {result}/{questions.length}</h2></div>
            }

            <Button onClick={handleClick} style={{display: `${display}`}}>next</ Button>
        </DivContainer>
    );
}

export default AppForm;