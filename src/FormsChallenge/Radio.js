import React from "react";
import formStyle from "./Form.module.css";

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
                              <label className={formStyle.title} style={{ display: "flex", columnGap: "20px" }} key={option}>
                                   <input 
                                        type="radio" 
                                        value={option} 
                                        checked={value === option}
                                        onChange={countResult} 
                                        className={formStyle.inputRadio}
                                   ></input>
                                   <div className={formStyle.customRadio}>
                                        <span></span>
                                   </div>
                                   <span>{option}</span>
                              </label>
                         </div>
                    );
               })}
          </>
     );
}

export default Radio;