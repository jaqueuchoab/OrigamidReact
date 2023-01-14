import React from "react";
import Radio from "./Radio";

const Form = ({ question, value, setValue, result, setResult }) => {
     return (
          <>
               <fieldset key={question.id}>
                    <legend>{question.question}</legend>
                    <Radio options={question.options} value={value} setValue={setValue} answer={question.answer} result={result} setResult={setResult}/>
               </fieldset>
          </>
     );
};

export default Form;