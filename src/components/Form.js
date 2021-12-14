import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react"


function Form(){
    const url=""
    const [data, setData] = useState({
        issue_summary:"",
        issue_description:"",
        identified_by_person_id:"",
        identified_date:"",
        related_project:"",
        assigned_to:"",
        status:"",
        priority:"",
        target_resolution_date:"",
        created_on:"",
        created_by:""
    })
    
    const handleInputChange = (e) => {
        e.preventDefault();

    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data)
  };
    return(
         <Box  component="form"
               sx={{'& .MuiTextField-root': { margin: 1, width: '40ch' },}}
               noValidate
               autoComplete="off">
         
            <FormControl>

                <TextField
                  name="identified_by_person_id"
                  value={data.identified_by_person_id}
                  onChange={handleInputChange}
                  required
                  id="outlined-required"
                  type="number"
                  label="Identified by"
                  defaultValue="Identified by (id number)"
                />
                <TextField
                  value={data.identified_date}
                  onChange={handleInputChange}
                  name="identified_date"
                  required
                  id="outlined-required"
                  label="Identified date"
                  type="date"
                  defaultValue="Identified date"
                  InputLabelProps={{ shrink: true }}
                />
                </FormControl>
                {/*  
                <TextField
                  name="related_project"
                  required
                  id="outlined-required"
                  label="Related project"
                  type="text"
                  defaultValue="Related project"
                />
                <TextField
                  name="assigned_to"
                  required
                  id="outlined-required"
                  label="Assigned to"
                  type="number"
                  defaultValue="Assigned to"
                />
                <TextField
                  name="target_resolution_date"
                  required
                  id="outlined-required"
                  label="Target Date"
                  type="date"
                  defaultValue="Target Date"
                  InputLabelProps={{ shrink: true }}
                />
                 <TextField
                  name="created_on"
                  required
                  id="outlined-required"
                  label="Created on"
                  type="date"
                  defaultValue="Created on"
                  InputLabelProps={{ shrink: true }}
                />
                 <TextField
                  name ="modified_on"
                  required
                  id="outlined-required"
                  label="Modified on"
                  type="date"
                  defaultValue="Modified on"
                  InputLabelProps={{ shrink: true }}
                />  
                <TextField
                  name="modified_by"
                  required
                  id="outlined-required"
                  label="Modified by"
                  type="date"
                  defaultValue="Modified by"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  name="resolution_summary"
                  required
                  id="outlined-multiline-static"
                  label="Resolution Summary"
                  multiline
                  rows={4}
                  defaultValue="Resolution Summary"
                />

            </FormControl>
            <FormControl style={{minWidth: 120}}>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  label="Status"
                  style={{margin:7,}}
                >
                  <MenuItem  key="High" value="High">High</MenuItem>
                  <MenuItem key="Medium" value="Medium">Medium</MenuItem>
                  <MenuItem key="Low" value="Low">Low</MenuItem>
                </Select>

                </FormControl>
                <FormControl style={{minWidth: 120}}>
                    <InputLabel>Priority</InputLabel>
                <Select
                  name="priority"
                  label="Priority"
                  style={{marginTop:7}}
                >
                  <MenuItem key="Open" value="Open">Open</MenuItem>
                  <MenuItem key="Closed" value="Closed">Closed</MenuItem>
                  <MenuItem key="InProgress" value="InProgress">In progress</MenuItem>
                </Select>
                
            </FormControl>
             */}
        </Box>
            
    )
}

export default Form