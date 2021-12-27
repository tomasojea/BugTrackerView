import FormReusable from "../components/FormReusable.js"
import TextField from '@mui/material/TextField';
import React from 'react';
import FormInput from  "../components/FormInput"
import FormSelect from "../components/FormSelect"
import Box from '@mui/material/Box';


function FormPeople(){
    
    const Inputparams = [{name: "assigned_project", 
                          label:"Assigned Project", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert Project name"
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
                          value:""
                        },{name: "person_name", 
                          label:"Name", 
                          defaultValue:"", 
                          type:"text",
                          value:""
                        },{name: "person_name", 
                          label:"Name", 
                          defaultValue:"", 
                          type:"text",
                          value:""
                        }]
                    
    const Selectparams = [{name:"Status",value:"Open",label:"Status", menuItem:["Open", "Close", "InProgress"]}]
                     

      
         
    return(
            <FormReusable formdatainput={Inputparams} formdataselect={Selectparams}>
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
                    <FormSelect/>
                </Box>                         
            </FormReusable>
        )
        
}

export default FormPeople;