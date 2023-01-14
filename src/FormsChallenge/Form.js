import React from "react";
import Radio from "./Radio";
import formStyle from "./Form.module.css";

// Importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importação do react-bootstrap
import Card from 'react-bootstrap/Card';

const Form = ({ question, value, setValue, result, setResult }) => {
     return (
          <>
               <Card bg="dark" text="white" className={`mt-4`} style={{ width: '30rem', padding: '10px'}} key={question.id}>
                    <Card.Header className={formStyle.title}>{question.question}</Card.Header>
                    <Card.Body><Radio options={question.options} value={value} setValue={setValue} answer={question.answer} result={result} setResult={setResult}/></Card.Body>
               </Card >
          </>
     );
};

export default Form;