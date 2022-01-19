import FormReusable from "../components/FormReusable.js"
import TextField from '@mui/material/TextField';
import React from 'react';
import FormInput from  "../components/FormInput"
import FormSelect from "../components/FormSelect"
import Box from '@mui/material/Box';
import {useEffect, useState} from "react"
import Button from "@material-ui/core/Button";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';




function FormPeople(){
   
    const [send, setSend] = useState();
    const [people, setPeople] = useState([]);
     
    const inputParams = [{name: "assigned_project", 
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
                        }
                        ,{name: "username", 
                          label:"Username", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert username"
                       }]
                    
    const selectParams = [{name:"person_role",label:"Role", menuItem:["Developer", "Tester", "Manager"]}]
    
    useEffect(() => {
        console.log("////From FormPeople////")
        console.log(send)
        console.log("////From FormPeople////")
    }, [send]);
               
    const apiPOST = () =>{
        
        fetch("http://localhost:8081/peoples",{
            method:'POST',
            headers:{"Content-Type":"application/hal+json"},
            body: JSON.stringify(send)
        })
    }
   /* async function  getUsers() {
        const response = await fetch("http://localhost:8081/peoples");
        const data = await response.json();
        console.log(data._embedded.peoples)
        setPeople(data._embedded.peoples)
    }*/
    
    const apiGet = () => {
    fetch("http://localhost:8081/peoples")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPeople(json._embedded.peoples)
      });
    };
    
    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setSend({...send,[name]: value});
        
    }  
            
    useEffect(() => {
        apiGet()
        apiPOST()
        
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        apiPOST()
    }
      
    return(
            <FormReusable
                formdatainput={inputParams} 
                formdataselect={selectParams} 
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
                    <FormInput setSend={setSend}/> 
                    <FormSelect/>
                    <Button size="small" type="submit">Submit</Button>

                </Box> 
                
                <Box>
                    <Select
                        sx={{ minWidth: 130 }}
                        inputProps={{style: {fontSize: 13, color:"#cccccc"}}}
                        name="person_name"
                        onChange={handleChange}
                    >
                        {people.map((item)=>(

                            <MenuItem key={item.person_name} value={item.person_name}>{item.person_name}</MenuItem>

                        ))}
                    </Select>
                </Box>
         
                
            </FormReusable>
        )
        
}

export default FormPeople;