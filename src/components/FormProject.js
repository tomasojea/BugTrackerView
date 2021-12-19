import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react"
import Button from "@material-ui/core/Button";


function FormProject(){
   
    const [data, setData] = useState({
        assigned_project:"",
        created_by:"",
        created_on:"",
        modified_by:"",
        modified_on:"",
        person_email:"",
        person_name:"Open",
        person_role:"Low",
        username:"",
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:8081/peoples',{
            method:'POST',
            headers:{"Content-Type":"application/hal+json"},
            body: JSON.stringify(data)
        }).then("New person added")
        console.log(data.related_project)
    }
    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({...data,[name]: value,});
        console.log(data)
    };
  
    return(
        <Box   
            component="form"
            sx={{
                '& .MuiTextField-root': { margin: 1, width: '40ch' },
                justifyContent: 'flex-end',
                display:'flex',
                flexDirection: 'column',
             }}
            autoComplete="off"
            onSubmit={handleSubmit}>
         
            <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap', }}>
                <TextField
                  name="assigned_project"
                  value={data.assigned_project}
                  onChange={handleInputChange}
                  required
                  id="outlined-required"
                  type="number"
                  label="Assigned Project"
                  defaultValue="Assigned Project"
                />
                <TextField
                  value={data.created_on}
                  onChange={handleInputChange}
                  name="created_on"
                  required
                  id="outlined-required"
                  label="Created On"
                  type="date"
                  defaultValue="Created On"
                  InputLabelProps={{ shrink: true }}
                />
            </FormControl>
            <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap',}}>
                <TextField
                  value={data.modified_by}
                  onChange={handleInputChange}
                  name="modified_by"
                  required
                  id="outlined-required"
                  label="Modified By"
                  type="date"
                  defaultValue="modified_by"
                />
                <TextField
                  value={data.modified_on}
                  onChange={handleInputChange}
                  name="modified_on"
                  required
                  id="outlined-required"
                  label="Modified On"
                  type="date"
                  defaultValue="Modified On"
                />
                <TextField
                  value={data.person_email}
                  onChange={handleInputChange}
                  name="person_email"
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
                  value={data.person_email}
                  onChange={handleInputChange}
                  name="person_email"
                  required
                  id="outlined-multiline-static"
                  label="Email"
                  multiline
                  rows={4}
                  defaultValue="Email"
                />
                <TextField
                  value={data.person_name}
                  onChange={handleInputChange}
                  name="person_name"
                  required
                  id="outlined-multiline-static"
                  label="Name"
                  multiline
                  rows={4}
                  defaultValue="Name"
                />
                <TextField
                  value={data.username}
                  onChange={handleInputChange}
                  name="username"
                  required
                  id="outlined-multiline-static"
                  label="Username"
                  multiline
                  rows={4}
                  defaultValue="Username"
                />
                
            </FormControl>
            <FormControl style={{ alignItems: 'center', flexDirection: 'row', margin:10, maxWidth:60, }}>
                <InputLabel>Status</InputLabel>
                <Select
                  name="person_role"
                  value={data.person_role}
                  onChange={handleInputChange}
                  label="Role"
                  style={{margin:7,}}
                >
                  <MenuItem key="Developer" value="Developer">Developer</MenuItem>
                  <MenuItem key="Tester" value="Tester">Tester</MenuItem>
                  <MenuItem key="Team Leader" value="Team Leader">Team Leader</MenuItem>
                </Select>
            </FormControl>
          
            <Button variant="contained" color="primary" type="submit" style={{alignSelf:'center'}}>
                Submit
            </Button>
        </Box>
            
    )
}

export default FormProject;
   