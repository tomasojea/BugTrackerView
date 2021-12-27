import FormControl from '@mui/material/FormControl';
import  {FormInputCont}  from '../components/FormReusable';
import { useContext } from 'react';
import {useState} from "react"
import TextField from '@mui/material/TextField';


function FormInput(){

 const [input, setInput] = useContext(FormInputCont);
 

return(
      
      <>
        {input.map((item) => (

           <>
            {console.log(item.name)}
           
                <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap',}}>
                    <TextField 
                       name={item.label}
                       value={item.value}
                       required
                       id="outlined-required"
                       type={item.type}
                       label={item.label}
                       defaultValue={item.defaultValue}
                       id="outlined-required"
                       InputLabelProps={{ shrink: true }}
                    />
                </FormControl>
           
           </>

        ))}
    </>
    
)
      
        
}

export default FormInput

