
import  {FormContext}  from '../components/FormReusable';
import { useContext } from 'react';
import {useState} from "react"
import TextField from '@mui/material/TextField';

function FormInput(){

 const [data, setData] = useContext(FormContext);
 
 const addItem = () => {
     
     
     console.log(data)
 }

return(
      
      <>
     {data.map((item) => (
        <>
           <TextField
                  name={data.label}
                  value={data.value}
                  required
                  id="outlined-required"
                  type={data.type}
                  label={data.label}
                  defaultValue={data.defaultValue}
                />
        </>
       
      ))}
    </>
    
)
      
        
}

export default FormInput

