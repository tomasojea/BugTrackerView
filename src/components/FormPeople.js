import FormReusable from "../components/FormReusable.js"
import TextField from '@mui/material/TextField';
import React from 'react';
import FormInput from  "../components/FormInput"


function FormPeople(){
    
    const Inputparams = [{name: "tomas", 
                          label:"nose", 
                          defaultValue:"tu vieja", 
                          type:"text",
                          value:"esta"
                        },{name: "tomas", 
                          label:"nose", 
                          defaultValue:"tu vieja", 
                          type:"text",
                          value:"esta"
                        }]
      
         
    return(
            <FormReusable alto={Inputparams}>
                            
                <FormInput/>       
                                            
            </FormReusable>
        )
        
}

export default FormPeople;