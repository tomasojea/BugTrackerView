import FormControl from '@mui/material/FormControl';
import  {FormContext}  from '../components/FormReusable';
import { useContext } from 'react';
import {useState} from "react"
import TextField from '@mui/material/TextField';


function FormInput(){

 const [data, setData] = useContext(FormContext);
 

return(
      
      <>
        {data.map((item) => (

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
                    />
                </FormControl>
           
           </>

        ))}
    </>
    
)
      
        
}

export default FormInput

