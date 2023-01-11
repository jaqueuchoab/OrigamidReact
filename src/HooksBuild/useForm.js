import React from "react";

// Objeto com cada tipo de 'dado' e seu respectivo regex e mensagem de erro
const types = {
     cep: {
          regex: /^\d{5}-?\d{3}$/,
          message: 'CEP inválido',
     },
}

const useForm = (type) => {
     const [value, setValue] = React.useState('');
     const [error, setError] = React.useState(null);

     // Função para validar o que for digitado no campo do formulaŕio
     function validate(value) {
          if(value.length === 0) {
               setError('Preencha um valor');
               return false;
          } else if(types[type] && !types[type].regex.test(value)) {
               setError(types[type].message);
               return false;
          } else {
               setError(null);
               return true;
          }
     }

     // Função ativada há cada mudança que ocorrer no campo do formulário
     function onChange({ target }) {
          if(error) validate(target.value);
          setValue(target.value);
     }

     return {
          value,
          setValue,
          onChange,
          onBlur: () => validate(value),
          validate: () => validate(value)
     };
}