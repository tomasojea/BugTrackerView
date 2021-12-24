import Box from '@mui/material/Box';
import {useState} from "react"
import React from 'react';
import createContext from "react"

export const FormContext = React.createContext();

function FormReusable(props){
    
    const [data, setData] = useState(props.alto)
    
   
  
    /*const handleSubmit = (e) =>{
        e.preventDefault()
        fetch(url,{
            method:'POST',
            headers:{"Content-Type":"application/hal+json"},
            body: JSON.stringify(data)
        })
      
    }
    const handleFormChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({...data,[name]: value,});
        console.log(data)
    };
    */
        
    return(
            
        <FormContext.Provider value={[data, setData, props.alto]}>
            {props.children}
            
        </FormContext.Provider>
    )
}

export default FormReusable   

