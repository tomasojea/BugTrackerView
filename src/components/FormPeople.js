import FormReusable from "../components/FormReusable.js"
import TextField from '@mui/material/TextField';
import React from 'react';
import FormInput from  "../components/FormInput"
import FormSelect from "../components/FormSelect"
import Box from '@mui/material/Box';
import {useEffect} from "react"


function FormPeople(){
   
   
    
    const Inputparams = [{name: "assigned_project", 
                          label:"Assigned Project", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert project name"
                        },{name: "created_on", 
                          label:"Created On", 
                          defaultValue:"", 
                          type:"date",
                          value:""
                        },{name: "modified_on", 
                          label:"Modified On", 
                          defaultValue:"", 
                          type:"date",
                          value:""
                        },{name: "person_email", 
                          label:"E-mail", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert email"
                        },{name: "person_name", 
                          label:"Name", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert fullname"
                        },{name: "username", 
                          label:"Username", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert username"
                          }]
                    
    const Selectparams = [{name:"Role", value:"Developer",label:"Role", menuItem:["Developer", "Tester", "Manager"]}]
                     
    const handlePOST = () =>{
        
        fetch(url,{
            method:'POST',
            headers:{"Content-Type":"application/hal+json"},
            body: JSON.stringify(data)
        })
      }

     useEffect(() => {
        handlePOST()

    }, []);
    
    const handleSubmit = e => {
        e.preventDefault()
        handlePOST()
    }
         
    return(
            <FormReusable
                formdatainput={Inputparams} 
                formdataselect={Selectparams} 
                
                
            >
                <Box   
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { margin: 1, width: '40ch' },
                        justifyContent: 'flex-end',
                        display:'flex',
                        flexDirection: 'column',
                    }}
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >           
                    <FormInput/> 
                    <FormSelect/>
                </Box>                         
            </FormReusable>
        )
        
}

export default FormPeople;