import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react"
import Button from "@material-ui/core/Button";


function Form(){
    const url=""
    const [data, setData] = useState({
        issue_summary:"",
        issue_description:"",
        identified_by_person_id:"",
        identified_date:"",
        related_project:"",
        assigned_to:"",
        status:"Low",
        priority:"Low",
        target_resolution_date:"",
        created_on:"",
        created_by:""
    })
    
    const handleSubmit = (e) =>{
        
        e.preventDefault()
        fetch('http://localhost:8081/issues',{
            method:'POST',
            headers:{"Content-Type":"application/hal+json"},
            body: JSON.stringify(data)
        }).then("New issue added")
        console.log(data.related_project)
        
        
        
        
    }
    const handleInputChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setData({...data,[name]: value,});
        console.log(data)
  };
    return(
        <Box  component="form"
               sx={{
                    '& .MuiTextField-root': { margin: 1, width: '40ch' },
                    justifyContent: 'flex-end',
                    display:'flex',
                    flexDirection: 'column',
                }}
               noValidate
               autoComplete="off"
               onSubmit={handleSubmit}>
         
            <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap',}}>

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
                 <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap',}}>
                <TextField
                  value={data.related_project}
                  onChange={handleInputChange}
                  name="related_project"
                  required
                  id="outlined-required"
                  label="Related project"
                  type="number"
                  defaultValue="Related project"
                />
                <TextField
                  value={data.assigned_to}
                  onChange={handleInputChange}
                  name="assigned_to"
                  required
                  id="outlined-required"
                  label="Assigned to"
                  type="number"
                  defaultValue="Assigned to"
                />
                <TextField
                  value={data.target_resolution_date}
                  onChange={handleInputChange}
                  name="target_resolution_date"
                  required
                  id="outlined-required"
                  label="Target Date"
                  type="date"
                  defaultValue="Target Date"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  value={data.created_on}
                  onChange={handleInputChange}
                  name="created_on"
                  required
                  id="outlined-required"
                  label="Created on"
                  type="date"
                  defaultValue="Created on"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  value={data.modified_on}
                  onChange={handleInputChange}
                  name ="modified_on"
                  required
                  id="outlined-required"
                  label="Modified on"
                  type="date"
                  defaultValue="Modified on"
                  InputLabelProps={{ shrink: true }}
                />  
                <TextField
                  value={data.modified_by}
                  onChange={handleInputChange}
                  name="modified_by"
                  required
                  id="outlined-required"
                  label="Modified by"
                  type="date"
                  defaultValue="Modified by"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  value={data.resolution_summary}
                  onChange={handleInputChange}
                  name="resolution_summary"
                  required
                  id="outlined-multiline-static"
                  label="Resolution Summary"
                  multiline
                  rows={4}
                  defaultValue="Resolution Summary"
                />

            </FormControl>
            <FormControl style={{minWidth: 120,}}>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={data.status}
                  onChange={handleInputChange}
                  label="Status"
                  style={{margin:7,}}
                >
                  <MenuItem key="High" value="High">High</MenuItem>
                  <MenuItem key="Medium" value="Medium">Medium</MenuItem>
                  <MenuItem key="Low" value="Low">Low</MenuItem>
                </Select>

            </FormControl>
            <FormControl style={{ alignItems: 'center', flexDirection: 'row', margin:10, }}>
                   
                <InputLabel>Priority</InputLabel>
                <Select
                  value={data.priority}
                  onChange={handleInputChange}
                  name="priority"
                  label="Priority"
                  style={{marginTop:7}}
                >
                  <MenuItem key="Open" value="Open">Open</MenuItem>
                  <MenuItem key="Closed" value="Closed">Closed</MenuItem>
                  <MenuItem key="InProgress" value="InProgress">In progress</MenuItem>
                </Select>
                
            </FormControl>
             <Button variant="contained" color="primary" type="submit">
                Submit
             </Button>
        </Box>
            
    )
}

export default Form