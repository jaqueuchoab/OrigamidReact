import React from 'react';
import Head from './Components/Head';
import Form from './FormsChallenge/Form';

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

const App = () => {
    const [next, setNext] = React.useState(0);
    const [display, setDisplay] = React.useState('block');
    const [radio, setRadio] = React.useState('');
    const [result, setResult] = React.useState(0);

    function handleClick() {
        setNext(() => next + 1);
        next === questions.length - 1 && setDisplay('none');
    }

    return (
        <div>
            <Head title="Forms"/>

            {next !== questions.length ? 
            <Form question={questions[next]} value={radio} setValue={setRadio} result={result} setResult={setResult}/>  : 
            <div><h2>Você acertou {result}/{questions.length}</h2></div>}

            <button onClick={handleClick} style={{display: `${display}`}}>Próxima</button>
        </div>
    );
}

export default App;