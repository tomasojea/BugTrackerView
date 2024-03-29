import Box from '@mui/material/Box';
import {useState} from "react"
import React from 'react';
import createContext from "react"

export const FormInputCont = React.createContext();
export const FormInputSelectCont = React.createContext();

function FormReusable(props){
    
    const [input, setInput] = useState(props.formdatainput)
    const [select, setSelect] = useState(props.formdataselect)
    const [data, setData] = useState({})
    
   
  
    /*const handleSubmit = (e) =>{
        e.preventDefault()
        fetch(url,{
            method:'POST',
            headers:{"Content-Type":"application/hal+json"},
            body: JSON.stringify(data)
        })
      }
     
   
    const handleFormChange = (e) => {

        const { name, value } = e.target;
        setData({...data,[name]: value,});
        console.log(data)
    };
   
       */   
    return(
            
        <FormInputCont.Provider value={[input, setInput, data, setData, props.formdatainput, props.data]}>
            <FormInputSelectCont.Provider value={[select, setSelect, props.formdataselect]}> 
                {props.children}
            </FormInputSelectCont.Provider>
        </FormInputCont.Provider>
    )
}

export default FormReusable   

