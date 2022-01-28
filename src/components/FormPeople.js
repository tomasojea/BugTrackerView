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
import FormControl from '@mui/material/FormControl';




function FormPeople(){
   
    const [send, setSend] = useState();
    const [project, setProject] = useState([]);
     
    const inputParams = [{name: "created_on", 
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
    fetch("http://localhost:8081/projects")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProject(json._embedded.projects)
      });
    };
    
    const handleChange = (e) => {
        
        const { name, value } = e.target;
        console.log()
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
                    <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap', marginLeft:1, marginTop:2 }}>
                        <InputLabel>Assigned Project</InputLabel>
                        <Select
                            sx={{ minWidth: 130 }}
                            value={[]}
                            inputProps={{style: {fontSize: 13, color:"#cccccc"}}}
                            defaultValue=""
                            name="assigned_project"
                            label="assigned_project"
                            onChange={handleChange}
                            sx={{ minWidth: 170 }}
                            inputProps={{style: {fontSize: 13, color:"#cccccc"}}}
                        >
                            {project.map((item)=>(

                               <MenuItem key={item.project_id} value={item.project_id}>{item.project_name}</MenuItem>

                            ))}
                        </Select>
                     </FormControl>
                    <Button size="small" type="submit">Submit</Button>

                </Box> 
                
                                   
            </FormReusable>
        )
        
}

export default FormPeople;