import React from "react";
import Radio from "./Radio";

const Form = (questions) => {
     const [radio, setRadio] = React.useState('');

     return (
          <>
               {questions.forEach((question) => {
                    return (
                         <fieldset key={question.id}>
                              <legend>{question.question}</legend>
                              <Radio options={question.option} value={radio} setValue={setRadio}/>
                         </fieldset>
                    );
               })}
          </>
     );
};

export default Form;