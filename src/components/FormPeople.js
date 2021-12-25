import FormReusable from "../components/FormReusable.js"
import TextField from '@mui/material/TextField';
import React from 'react';
import FormInput from  "../components/FormInput"
import Box from '@mui/material/Box';


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
                <Box   
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { margin: 1, width: '40ch' },
                        justifyContent: 'flex-end',
                        display:'flex',
                        flexDirection: 'column',
                    }}
                    autoComplete="off"
                >           
                    <FormInput/>       
                </Box>                         
            </FormReusable>
        )
        
}

export default FormPeople;