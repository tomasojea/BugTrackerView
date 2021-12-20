import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react"
import Button from "@material-ui/core/Button";
import FormWrapper, { FormContext } from './FormWrapper';
import React from 'react';
import FormInput from "../components/FormInput"

export const useExampleContext = () => React.useContext(FormContext);



function FormProject(){
   
    
    return(
         
        
            <FormWrapper>
        <FormContext.Consumer>
            {({form, handleFormChange}) => (
            <>
            
                <FormInput 
                label="First Name" 
                name="firstName" 
                value={form.firstName}
                onChange={handleFormChange} />

        
            <Button variant="contained" color="primary" type="submit" style={{alignSelf:'center'}}>
                Submit
            </Button>
            </>
               )}
        </FormContext.Consumer>
            
        </FormWrapper>
      
    )
}

export default FormProject;
   