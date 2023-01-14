import React from "react";
import UserContext from "../Components/UserContext";

const Radio  = ({options, value, setValue, answer, result, setResult, ...props}) => { 

     function countResult({target}) {
          if(target.value === answer) {
               setResult(() => result + 1);
          }
          setValue(target.value);
     }

     return (
          <>
               {options.map((option) => {
                    return (
                         <div>
                              <label key={option}>
                                   <input 
                                        type="radio" 
                                        value={option} 
                                        checked={value === option}
                                        onChange={countResult} 
                                   ></input>
                                   {option}
                              </label>
                         </div>
                    );
               })}
          </>
     );
}

export default Radio;