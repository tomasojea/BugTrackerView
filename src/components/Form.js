import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


function Form(){
    
    return(
         <Box  component="form"
               sx={{'& .MuiTextField-root': { margin: 1, width: '40ch' },}}
               noValidate
               autoComplete="off">
         
            <FormControl>

                <TextField
                  required
                  id="outlined-required"
                  type="number"
                  label="Identified by"
                  defaultValue="Identified by (id number)"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Identified by"
                  type="date"
                  defaultValue="Identified date"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Related project"
                  type="text"
                  defaultValue="Related project"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Assigned to"
                  type="number"
                  defaultValue="Assigned to"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Target Date"
                  type="date"
                  defaultValue="Target Date"
                />
                 <TextField
                  required
                  id="outlined-required"
                  label="Created on"
                  type="date"
                  defaultValue="Created on"
                />
                 <TextField
                  required
                  id="outlined-required"
                  label="Modified on"
                  type="date"
                  defaultValue="Modified on"
                />  
                 <TextField
                  required
                  id="outlined-required"
                  label="Modified by"
                  type="date"
                  defaultValue="Modified by"
                />
                <TextField
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
                  label="Status"
                  style={{margin:7,}}

                >
                  <MenuItem  value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>

                </FormControl>
                <FormControl style={{minWidth: 120}}>
                    <InputLabel>Status</InputLabel>
                <Select
                  label="Priority"
                  style={{marginTop:7}}

                >
                  <MenuItem  value="Open">Open</MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                  <MenuItem value="InProgress">In progress</MenuItem>
                </Select>

            </FormControl>
        
        </Box>
            
    )
}

export default Form